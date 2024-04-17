import Header from "../../components/common/header";
import Contact from "../../components/common/contact";
import Footer from "/pages/components/common/footer";
import { useRouter } from "next/router";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Cart() {
    const router = useRouter();
    const [clientSecret, setClientSecret] = useState(null);
    const { productId } = router.query;
    const { quantity } = router.query;
    const { size } = router.query;

    useEffect(() => {
        if(!productId || !quantity || !size) return;
        fetch('/api/checkout_sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId, quantity, size })
        }).then((res)=> res.json()).then((data) => setClientSecret(data.clientSecret));
    });

    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div>
                {
                    clientSecret ?
                    <EmbeddedCheckoutProvider stripe={stripePromise} options={{clientSecret}}>
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                    :
                    <div className="flex justify-center items-center h-screen">
                        <Skeleton height={100} width={100} count={1} />
                    </div>
                }
            </div>
            <Footer/>
            <div className="h-32 md:h-0"></div>
        </div>
    )
}
