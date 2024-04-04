import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";
import { useState, useEffect } from "react";
import Order from "../components/admin/order";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Orders() {
    const [orders, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/orderHistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: localStorage.getItem('token')
            })
        }).then(res => res.json())
            .then(data => {
                setOrder(data.orders);
                setLoading(false);
            });
    }, []);

    return (
        <div className={`portslat relative min-h-screen h-full max-w-screen overflow-auto relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="p-6 overflow-auto">
                <div className="text-center text-3xl font-bold my-6">Order History:</div>
                <p className="p-4 text-center">Your orders with all History  either in progress or  delivered will be visible here.</p>
                <div className="min-w-[900px] rounded-xl border m-2">
                    <div>
                        <h1 className="xl:m-12 m-2 my-4 m-3 text-[18px]"><span className="text-gray-500">Orders {"/"}</span> <span className="text-gray-700">Order details</span></h1>
                        <div className="rounded-xl overflow-x-scroll border m-2 xl:m-12 xl:w-2/3">
                            <div className="flex justify-between p-6 px-8 cursor-pointer">
                                <h2 className="font-bold text-xl">Orders</h2>
                                <h2 className="p-2 px-2 text-[13px] hover:text-blue-400 text-gray-600 hover:bg-blue-50">Download CSV</h2>
                            </div>
                            <div className="text-center overflow-x-scroll">
                                <div className="grid px-12 p-2 place-content-center text-gray-600 grid-cols-12 bg-blue-50 uppercase text-[13px]">
                                    <div className="col-span-2 p-2">Order Id</div>
                                    <div className="col-span-2 p-2">Date & Time</div>
                                    <div className="col-span-3 p-2">Customer</div>
                                    <div className="col-span-3 p-2">Contact</div>
                                    <div className="col-span-2 p-2 text-left ml-3">Status</div>
                                </div>
                                <div>
                                    {
                                        loading && <div className="p-2"><Skeleton count={8} width={"100%"} /></div>
                                    }
                                    {
                                        !loading && orders.length == 0 && <div className="p-12 flex bg-gray-50 items-center justify-center">
                                            <div className="text-gray-500">No Order History Found</div>
                                        </div>
                                    }
                                    {
                                        !loading && orders && Array.isArray(orders) && orders.length > 0 && orders.map((order, index) => {
                                            if (!order.cart || !order.contactDetails || !order.email || !order.paymentIntent || !order.time) {
                                                return <div key={index}>Loading Error</div>
                                            }
                                            return <Order key={index} order={order} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div className="md:h-0 h-16"></div>
        </div>
    )
}