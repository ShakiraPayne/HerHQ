import { MyContext } from '../../../context/createContext';
import Contact from "/pages/components/common/contact";
import Footer from "/pages/components/common/footer";
import Header from "/pages/components/common/header";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from "react-loading-skeleton";
import { getProducts } from "/utils/mongodb";
import { useContext, useState } from 'react';
import Image from "next/image";
import toast from 'react-hot-toast';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const ProductPage = ({ product }) => {

    const [clientSecret, setClientSecret] = useState(null);
    const [paying, setPaying] = useState(false);
    const { products, toggleCart } = useContext(MyContext);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('XS');

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }

    const handlePayment = async () => {
        const notify = () => toast.loading('Loading Payment Gateway');
        const userId = localStorage.getItem('token');
        if (!userId) {
            toast.custom((t) => {
                console.log("Inside toast");
                const handleGuest = (id) => {
                    console.log("Handle guest called.");
                    toast.dismiss(id);
                    localStorage.setItem('token', 'guest');
                    handlePayment();
                }

                return <div className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md p-4 w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5`}>
                    <h1 className='font-bold text-xl text-gray-800'>Alert!</h1>
                    <h1 className='w-full max-w-md p-2'>Hey! You are not logged in, prefer to login. But, you can continue as guest.</h1>
                    <hr />
                    <div className='flex items-center justify-between p-2'>
                        <div className="flex">
                            <button
                                onClick={()=>{toast.dismiss(t.id)}}
                                className="w-full font-bold border border-transparent rounded-none p-2 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                <Link href={"/user/login"}>Login</Link>
                            </button>
                        </div>
                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => handleGuest(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-2 flex items-center justify-center text-sm font-bold text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Continue as a guest
                            </button>
                        </div>
                    </div>
                </div>
        }, { id: notify })
            return;
        }
        setPaying(!paying);
        fetch('/api/checkout_sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId, cartItems: [{
                    id: product.id,
                    quantity,
                    size,
                    name: product.name,
                    images: [product.images[0]],
                    description: product.description,
                    price: product.price,
                }],
                cart : false
            })
        }).then(res => res.json()).then(data => {
            setClientSecret(data.clientSecret);
            toast.success('Payment Gateway Loaded', { id: notify });
        }).catch(err => {
            toast.error(err.message, { id: notify });
        });
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    if (!product) return (
        <div>
            Error 404
        </div>
    )

    return (
        <div className={`portslat min-h-screen h-full relative pb-16 bg-white`}>
            <Contact />
            <Header />
            {
                !paying && <div className="bg-gray-100">
                    <div className="md:grid md:grid-cols-2 place-content-center">
                        <div className="lg:grid lg:grid-cols-2">
                            <div className="rounded-xl bg-transparent p-10 w-fit">
                                <Image src={product.images[0]} alt="product1" width={500} height={500} className="w-96 rounded-xl" />
                            </div>
                            <div className="grid grid-cols-2 h-fit gap-6 p-12">
                                {product.images[1] != undefined && <Image src={product.images[1]} alt="product2" width={300} height={300} className={`hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl outline outline-gray-50 hover:outline-gray-600`} />}
                                {product.images[2] != undefined && <Image src={product.images[2]} alt="product3" width={300} height={300} className={`hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl outline outline-gray-50 hover:outline-gray-600`} />}
                                {product.images[3] != undefined && <Image src={product.images[3]} alt="product4" width={300} height={300} className={`hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl outline outline-gray-50 hover:outline-gray-600`} />}
                                {product.images[4] != undefined && <Image src={product.images[4]} alt="product4" width={300} height={300} className={`hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl outline outline-gray-50 hover:outline-gray-600`} />}
                            </div>
                        </div>
                        <div className="md:p-20 p-4 h-full flex flex-col justify-start">
                            <h1 className="font-bold md:text-3xl  text-xl">{product.name}</h1>
                            <h1 className="py-4 text-pink-700 font-bold">MRP : <span className="text-gray-800 font-medium text-xl">£{product.price}</span> </h1>
                            <div className='text-pink-600 font-bold text-sm'>You saved 12% of money</div>
                            <h1 className="text-xl text-gray-700">{product.description}</h1>
                            <h1 className="text-sm text-pink-700 my-2 hover:underline cursor-pointer">Inclusive of all taxes</h1>
                            <div className="text-lg mt-4">
                                <span className="font-bold">Color:</span> <span className="text-md">{product.color}</span>
                            </div>
                            <div className="mt-4 text-gray-800 cursor-pointer">
                                <div className="flex py-4 justify-start gap-2">
                                    <div onClick={() => { setSize('XS') }} className={`${size == 'XS' ? 'bg-gray-200 text-pink-600' : 'bg-gray-50'} hover:bg-gray-800 hover:text-white px-5 p-2`}>XS</div>
                                    <div onClick={() => { setSize('S') }} className={`${size == 'S' ? 'bg-gray-200 text-pink-600' : 'bg-gray-50'} hover:bg-gray-800 hover:text-white px-5 p-2`}>S</div>
                                    <div onClick={() => { setSize('M') }} className={`${size == 'M' ? 'bg-gray-200 text-pink-600' : 'bg-gray-50'} hover:bg-gray-800 hover:text-white px-5 p-2`}>M</div>
                                    <div onClick={() => { setSize('L') }} className={`${size == 'L' ? 'bg-gray-200 text-pink-600' : 'bg-gray-50'} hover:bg-gray-800 hover:text-white px-5 p-2`}>L</div>
                                </div>
                            </div>
                            <div className="flex p-1 items-center gap-3 px-2 border w-fit rounded-lg m-2 border-gray-300">
                                <div className="text-sm font-bold text-blue-40">Quantity</div>
                                <div onClick={handleDecrement} className="cursor-pointer p-2">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="px-2 p-3 border-2 shadow-xl bg-gray-300 rounded-md">{quantity}</div>
                                <div onClick={handleIncrement} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="plus"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 1v14M1 8h14"></path></g></svg>
                                </div>
                            </div>
                            <div className="flex flex-wrap py-6">
                                <div onClick={handlePayment} className="text-lg mr-2 mb-2 cursor-pointer p-2 bg-pink-500 text-white w-fit">
                                    BUY NOW
                                </div>
                                <div onClick={() => { toggleCart(product) }} className=" mr-2 mb-2 cursor-pointer text-lg p-2 bg-gray-500 text-white w-fit ">
                                    {products[product.id] && products[product.id].cart ? 'Added to Cart' : 'Add to Cart'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                paying && clientSecret && <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            }
            {
                paying && !clientSecret && <div className="flex justify-center items-center h-screen">
                    <Skeleton height={100} width={100} count={1} />
                </div>
            }
            <Footer />
        </div>
    );
};

export async function getStaticPaths() {
    const products = await getProducts();
    const paths = products.map(product => ({ params: { product: product.id } }));
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const products = await getProducts();
    const product = products.find(p => p.id === params.product);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: { product },
    };
}


export default ProductPage;