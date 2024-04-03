import { getProducts } from "../../utils/mongodb";
import React, { useContext } from 'react';
import { MyContext } from '../../context/createContext';
import Header from "../components/common/header";
import Contact from "../components/common/contact";
import AddProduct from "../components/common/addproduct";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function Liked({items}) {

    const { products, loading, toggleWishlist, toggleCart } = useContext(MyContext);
    const wishlist = Object.values(products).filter(item => item.liked);

    return (
        <div className={`portslat min-h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="bg-gray-100 p-6 h-full">
                <div className="text-center">
                    <h1 className="text-2xl md:mt-6 font-bold">Wishlist:</h1>
                </div>
                {loading && <div className="md:mx-20 my-12"><Skeleton count={6} width={"100%"} /></div>}
                {!loading && wishlist && wishlist.length === 0 && <div className="text-center m-6 p-12 bg-white rounded-xl">Your wishlist is empty!</div>}
                <div className="text-center pt-6 sm:grid sm:grid-cols-3 gap-6">
                    {!loading && wishlist.length > 0 && wishlist.map((item, index) => {
                        return <div key={index} className="text-gray-800 bg-white rounded-xl overflow-hidden my-2">
                            <div className="flex justify-between">
                                <div className="w-full">
                                    <Image height={120} width={80} src={item.images[0]} alt={item.name} className="w-full h-32 xs:h-full object-cover" />
                                </div>
                                <div className="p-3 flex flex-col items-center justify-center text-center gap-2 w-full">
                                    {item.name}
                                    {item.stock === item.stock ? <p className="text-green-800 text-xs">In stock</p> : <p className="text-red-800 text-xs">Out of stock</p>}
                                    <div className="flex items-center justify-between w-full text-xs">
                                        <div className='hover:bg-gray-200 p-1 rounded-md cursor-pointer' onClick={() => { toggleWishlist(item) }}>
                                            <svg width="20px" height="20px" viewBox="0 -5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssketch="http://www.bohemiancoding.com/sketch/ns">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchtype="MSPage">
                                                    <g id="Icon-Set-Filled" sketchtype="MSLayerGroup" transform="translate(-518.000000, -1146.000000)" fill="#000000">
                                                        <path d="M540.647,1159.24 C541.039,1159.63 541.039,1160.27 540.647,1160.66 C540.257,1161.05 539.623,1161.05 539.232,1160.66 L536.993,1158.42 L534.725,1160.69 C534.331,1161.08 533.692,1161.08 533.298,1160.69 C532.904,1160.29 532.904,1159.65 533.298,1159.26 L535.566,1156.99 L533.327,1154.76 C532.936,1154.37 532.936,1153.73 533.327,1153.34 C533.718,1152.95 534.352,1152.95 534.742,1153.34 L536.981,1155.58 L539.281,1153.28 C539.676,1152.89 540.314,1152.89 540.708,1153.28 C541.103,1153.68 541.103,1154.31 540.708,1154.71 L538.408,1157.01 L540.647,1159.24 L540.647,1159.24 Z M545.996,1146 L528.051,1146 C527.771,1145.98 527.485,1146.07 527.271,1146.28 L518.285,1156.22 C518.074,1156.43 517.983,1156.71 517.998,1156.98 C517.983,1157.26 518.074,1157.54 518.285,1157.75 L527.271,1167.69 C527.467,1167.88 527.723,1167.98 527.979,1167.98 L527.979,1168 L545.996,1168 C548.207,1168 550,1166.21 550,1164 L550,1150 C550,1147.79 548.207,1146 545.996,1146 L545.996,1146 Z" id="delete" sketchtype="MSShapeGroup"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div onClick={() => { toggleCart(item) }} className='p-1 hover:bg-gray-200 rounded-md'>
                                            {
                                                !item.cart ? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#1C274C" strokeWidth="1.5" />
                                                    <path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#1C274C" strokeWidth="1.5" />
                                                    <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" stroke="#1C274C" strokeWidth="1.5" />
                                                </svg>
                                                    :
                                                    <Image src={'/icons/carted.png'} className='h-5 w-6' height={40} width={40} alt='cart' />
                                            }
                                        </div>
                                        <div>
                                            <svg width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 flex flex-col items-center w-full justify-center">
                                    ${item.price}
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
            <AddProduct items={items} />
            <div className="h-16 md:h-0"></div>
        </div>
    )
}


export async function getStaticProps() {
    const items = await getProducts();
    return {
        props : {
            items
        },
        revalidate: 7 * 24 * 60 * 60
    }
}