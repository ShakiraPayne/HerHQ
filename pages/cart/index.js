import { getProducts } from "../../utils/mongodb";
import Header from "../components/common/header";
import 'react-loading-skeleton/dist/skeleton.css';
import Contact from "../components/common/contact";
import AddProduct from "../components/common/addproduct";
import { MyContext } from '../../context/createContext';
import Skeleton from "react-loading-skeleton";
import toast from 'react-hot-toast';
import Link from "next/link";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js'
import { useEffect, useState, useContext } from 'react';
import Image from "next/image";
import { loadStripe } from '@stripe/stripe-js'
import CartProduct from "/outsource/cartProduct";
import Footer from "../components/common/footer";
import { useRouter } from "next/router";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Cart({ items }) {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [clientSecret, setClientSecret] = useState(null);
    const { products } = useContext(MyContext);
    const cart = Object.values(products).filter(item => item.cart);
    const price = cart.reduce((acc, item) => acc + parseFloat(item.price * item.quantity), 0);
    const [fetchController, setFetchController] = useState(null);

    useEffect(() => {
        const handleRouteChange = () => {
            toast.dismiss();
            if (fetchController) {
                fetchController.abort();
                setFetchController(null);
            }
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [fetchController]);

    const startPayment = async () => {
        const newFetchController = new AbortController();
        setFetchController(newFetchController);
        const signal = newFetchController.signal;
        const notify =  toast.loading('Loading Payment Gateway');
        const userId = localStorage.getItem('token');
        if (!userId) {
            toast.custom((t) => {
                const handleGuest = (id) => {
                    toast.dismiss(id);
                    localStorage.setItem('token', 'guest');
                    startPayment();
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
        setLoading(!loading);
        fetch('/api/checkout_sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            signal,
            body: JSON.stringify({ userId, cartItems: cart })
        }).then(res => res.json()).then(data => {
            setClientSecret(data.clientSecret);
            toast.success('Payment Gateway Loaded', { id: notify });
        }).catch(err => {
            toast.error(err.message, { id: notify });
        });
    }

    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />

            {
                loading && <div className="bg-gray-100 p-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mt-4">Shopping Cart:</h1>
                    </div>
                    <div className="w-full flex items-center justify-center my-8">
                        <ol className="flex items-center md:w-1/2 text-sm font-medium text-center text-gray-500 sm:text-base">
                            <li className="flex md:w-full items-center text-blue-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Cart
                                </span>
                            </li>
                            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                                    Payment
                                </span>
                            </li>
                            <li className="flex items-center">
                                Delivered
                            </li>
                        </ol>
                    </div>
                    <div className="lg:flex justify-around md:px-16">
                        <div className="pt-6 p-4 w-fit grow">
                            {
                                cart.map((item, index) => {
                                    return <CartProduct key={index} item={item} />
                                })
                            }
                        </div>
                        <div className="min-w-80 md:mx-16 pt-8 flex-none">
                            <div className="flex p-2 my-4 border border-2 border-gray-400">
                                <Image height={60} width={60} src="/icons/coupon.png" alt="coupon" className="w-6 mx-3 h-6 object-cover" />
                                <h1>Coupons Applicable</h1>
                            </div>
                            <div className="text-gray-800 border border-2 border-gray-600 bg-white p-2 rounded-xl overflow-hidden my-2">
                                <div className="flex justify-between mx-6">
                                    <h1>SubTotal:</h1>
                                    <h2>£ {price}</h2>
                                </div>
                                <div className="flex justify-between mx-6">
                                    <h1>Additional Taxes: </h1>
                                    <h2 className="text-green-600">£ 0.00</h2>
                                </div>
                                <div className="flex justify-between mx-6">
                                    <h1>Total:</h1>
                                    <h2 className="text-gray-800 overline">£ {price}</h2>
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={startPayment} className="bg-gray-600 text-white p-2 rounded-lg px-4 w-full mt-6">Go To Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                !loading && (
                    clientSecret ?
                        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                            <EmbeddedCheckout />
                        </EmbeddedCheckoutProvider> :
                        <div className="text-center">
                            <Skeleton height={500} />
                        </div>)
            }

            {loading && <AddProduct items={items} />}
            {
                loading && <Footer />
            }
            <div className="h-32 md:h-0"></div>
        </div>
    )
}

export async function getStaticProps() {
    const items = await getProducts();
    return {
        props: {
            items
        },
        revalidate: 7 * 24 * 60 * 60
    }
}