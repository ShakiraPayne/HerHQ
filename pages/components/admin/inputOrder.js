import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Order({ order }) {
    const trackRef = useRef();
    const [updating, setUpdating] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    if (!order || !order.cart || !order.contactDetails || !order.email || !order.paymentIntent || !order.time) {
        return <div>Loading Error</div>
    }

    const addTrack = () => {
        const track = trackRef.current.value;
        if (!track) {
            return toast.error('Please Enter Tracking Link');
        }
        const notify = toast.loading('Adding Tracking Info');
        fetch('/api/addTrack', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: order._id,
                track: track
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.success) {
                order.track = track;
                setUpdating(false);
                toast.success('Tracking Info Added', { id: notify });
            } else {
                toast.error('Error Adding Tracking Info', { id: notify });
            }
        }).catch(_ => {
            toast.error('Error Adding Tracking Info', { id: notify });
        });
    }

    const date = new Date(order.time * 1000);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedDate = date.toLocaleDateString('en-GB', options);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return (
        <div>
            <div className="grid grid-cols-12 relative text-xs pl-8 place-content-center">
                <div className="col-span-2 w-40 font-bold overflow-hidden p-2 text-xs">{order.paymentIntent}</div>
                <div className="text-xs p-2 col-span-2 px-3">
                    <div>{formattedDate}</div>
                    <div>{formattedTime}</div>
                </div>
                <div className="font-bold col-span-3 p-2">
                    {order.email}
                </div>
                <div className="col-span-2 p-2">
                    {order.contactDetails}
                </div>
                {
                    updating && <div className="absolute rounded-md border border-blue-800 bg-blue-100 p-2 bottom-12 z-50 right-0">
                        <input ref={trackRef} type="text" placeholder="Tracking Link" className="w-40 p-2 mx-2 border outline outline-0 border-blue-800 rounded-xl" />
                        <button onClick={addTrack} className="p-2 bg-blue-500 text-white rounded-xl">Add</button>
                    </div>
                }
                <div className="col-span-3 grid grid-cols-3 place-centent-center p-2">
                    {
                        order.track == null && <div onClick={()=>{setUpdating(!updating)}} className="font-bold p-2 cursor-pointer col-span-2 w-full rounded-full text-xs bg-red-100 text-red-700">Not Shipped</div>
                    }
                    {
                        order.track != null && <div className="font-bold p-2 col-span-2 cursor-pointer w-full rounded-full text-xs bg-green-200 text-green-800"><Link href={order.track}>Track</Link></div>
                    }
                    <div onClick={() => { setShowDetails(!showDetails) }} className={`h-6 w-6 m-1 mx-4 cursor-pointer bg-gray-200 rounded-full flex items-center justify-center col-span-1 origin-center ${showDetails ? 'rotate-180' : 'rotate-0'}`}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`${showDetails ? 'block' : 'hidden'} p-1 bg-gray-100 place-content-center`}>
                {
                    Array.isArray(order.cart) && order.cart.map((product, index) => {
                        if (!product.name || !product.images || !Array.isArray(product.images) || !product.quantity || !product.price) {
                            return <div key={index}>Error</div>
                        }
                        return (
                            <div key={index} className="grid grid-cols-4 m-2 border bg-white place-content-center rounded-xl">
                                <div className="p-2 text-sm font-bold">{product.name}</div>
                                <div className="col-span-1 flex justify-center">
                                    <Image height={40} width={30} src={product.images[0]} alt="product" className="w-10 h-10" />
                                </div>
                                <div className="h-fit col-span-1 p-2">
                                    <div className="text-center">{product.quantity} <span className="text-gray-600 text-sm font-bold">Qty</span></div>
                                </div>
                                <div className="p-2">€ {product.price}</div>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    );
}