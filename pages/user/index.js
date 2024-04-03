import Header from "./../components/common/header";
import Contact from "./../components/common/contact";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

const parseIt = async (data) => { return await JSON.parse(data) };

export default function User() {
    const [showDetail, setShowDetail] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();
    const routerRef = useRef(router);

    const memoizedParse = useCallback(parseIt, []);

    useEffect(() => {
        const handleUserFetch = async () => {
            let info = localStorage.getItem('user');
            if (!info) {
                routerRef.current.replace('/user/login');
            }
            else {
                try {
                    setUser(await memoizedParse(info));
                }
                catch (error) {
                    routerRef.current.replace('/user/login');
                }
            }
        };

        handleUserFetch();
    }, [memoizedParse, routerRef]); 

    if (!user) {
        return <div className="p-8">
            <Skeleton count={10} width={"100%"} />
        </div>
    }

    const toggleDetail = () => {
        setShowDetail(!showDetail);
    };

    const handleLogout = async () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('cart');
        setUser(null);
        await fetch('/api/logout');
        router.push('/user/login');
    }

    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="flex md:mt-6 items-center md:mt-6 flex-col justify-center">
                <div className="md:w-2/3">
                    <h1 className="text-3xl my-6 mb-12 font-bold greatvibes text-center">{user.name}</h1>
                    <div>
                        <div className="border-t-2">
                            <div className="flex md:px-4 p-2 justify-between bg-white items-center" onClick={toggleDetail}>
                                <div>
                                    <div className="text-xl">
                                        <h1>Account</h1>
                                    </div>
                                    <p className="text-sm">Your profile information management.</p>
                                </div>
                                <div className={`h-6 w-6 m-1 mx-4 bg-gray-200 rounded-full flex items-center justify-center col-span-1 origin-center ${showDetail ? 'rotate-180' : 'rotate-0'}`}>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            {
                                showDetail && <div className="bg-gray-100 flex justify-center flex-col items-center p-2 px-4">
                                    <div className={`md:grid md:grid-cols-2 w-full`}>
                                        <div className="p-2">
                                            <h1 className="text-sm font-bold">First Name</h1>
                                            <input className="text-sm border-2 border-gray-400 max-w-80 w-full my-2 rounded-md p-2 outline-0 px-3" placeholder="firstname" />
                                        </div>
                                        <div className="p-2">
                                            <h1 className="text-sm font-bold">Last Name</h1>
                                            <input className="text-sm border-2 border-gray-400 max-w-80 w-full my-2 rounded-md p-2 outline-0 px-3" placeholder="lastname" />
                                        </div>
                                        <div className="p-2">
                                            <h1 className="text-sm font-bold">Your Email</h1>
                                            <input className="text-sm border-2 border-gray-400 max-w-80 w-full my-2 rounded-md p-2 outline-0 px-3" placeholder="firstname" />
                                        </div>
                                        <div className="p-2">
                                            <h1 className="text-sm font-bold">Phone Number</h1>
                                            <input className="text-sm border-2 border-gray-400 max-w-80 w-full my-2 rounded-md p-2 outline-0 px-3" placeholder="+9999 9999 9999" />
                                        </div>
                                        <div className="p-2">
                                            <h1 className="text-sm font-bold">Address</h1>
                                            <textarea className="text-sm border-2 border-gray-400 max-w-80 w-full my-2 rounded-md p-2 outline-0 px-3" placeholder="lastname" />
                                        </div>

                                    </div>
                                    <div>
                                        <div className="p-2 px-4 cursor-pointer bg-gray-700 rounded-md w-fit text-white">Update</div>
                                    </div>
                                </div>
                            }
                        </div>
                        <Link href={'/orders'}>
                            <div className="border-t-2 p-4">
                                <h1 className="text-xl">Orders</h1>
                                <p className="text-sm">History of your orders, with delivery status.</p>
                            </div></Link>
                        <Link href={'/liked'}>
                            <div className="border-t-2 p-4">
                                <h1 className="text-xl">Wishlist</h1>
                                <p className="text-sm">Save your love products, and buy when you want.</p>
                            </div>
                        </Link>
                        <Link href={'/shipment'}>
                            <div className="border-y-2 p-4">
                                <h1 className="text-xl">Track Shipment</h1>
                                <p className="text-sm">Track your shipments and find the status of parcels.</p>
                            </div>
                        </Link>
                        <div className="flex items-center justify-center">
                            <div onClick={handleLogout} className="p-2 cursor-pointer px-4 text-white m-6 bg-gray-700 rounded-lg">Log Out</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-16 md:h-0"></div>
        </div>
    )
}