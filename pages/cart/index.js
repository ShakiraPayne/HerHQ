import { getProducts } from "../../utils/mongodb";
import Header from "../components/common/header";
import 'react-loading-skeleton/dist/skeleton.css';
import Contact from "../components/common/contact";
import AddProduct from "../components/common/addproduct";
import { MyContext } from '../../context/createContext';
import Skeleton from "react-loading-skeleton";
import toast from 'react-hot-toast';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js'
import { useContext, useState } from 'react';
import Image from "next/image";
import { loadStripe } from '@stripe/stripe-js'
import CartProduct from "@/outsource/cartProduct";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Cart({ items }) {

    const [loading, setLoading] = useState(true);
    const [clientSecret, setClientSecret] = useState(null);
    const { products } = useContext(MyContext);
    const cart = Object.values(products).filter(item => item.cart);
    const price = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

    const startPayment = async () => {
        const notify = () => toast.loading('Loading Payment Gateway');
        const userId = localStorage.getItem('token');
        if (!userId) {
            toast.error('Please login to continue', { id: notify});
            return;
        }
        setLoading(!loading);
        fetch('/api/checkout_sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, cartItems: cart})
        }).then(res => res.json()).then(data => {
            setClientSecret(data.clientSecret);
            toast.success('Payment Gateway Loaded', { id: notify });
        }).catch(err => {
            toast.error( err.message , { id: notify });
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
                    <div className="md:flex justify-around">
                        <div className="text-center pt-6 p-4">

                            {
                                cart.map((item, index) => {
                                    return <CartProduct key={index} item={item} />
                                })
                            }

                        </div>

                        <div className="min-w-80 pt-8">
                            <div className="flex p-2 my-4 border border-2 border-gray-400">
                                <Image height={60} width={60} src="/icons/coupon.png" alt="coupon" className="w-6 mx-3 h-6 object-cover" />
                                <h1>Coupons Applicable</h1>
                            </div>
                            <div className="text-gray-800 border border-2 border-gray-600 bg-white p-2 rounded-xl overflow-hidden my-2">
                                <div className="flex justify-between mx-6">
                                    <h1>SubTotal:</h1>
                                    <h2>€ {price}</h2>
                                </div>
                                <div className="flex justify-between mx-6">
                                    <h1>Additional Taxes: </h1>
                                    <h2 className="text-green-600">€ 0.00</h2>
                                </div>
                                <div className="flex justify-between mx-6">
                                    <h1>Total:</h1>
                                    <h2 className="text-gray-800 overline">€ {price}</h2>
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

            { loading && <AddProduct items={items} /> }
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