import { getProducts } from "../../utils/mongodb";
import React, { useContext } from 'react';
import { MyContext } from '../../context/createContext';
import Header from "../components/common/header";
import Contact from "../components/common/contact";
import AddProduct from "../components/common/addproduct";
import Image from "next/image";
import Footer from "../components/common/footer";

export default function Liked({ items }) {

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
                <div className="pt-6 md:flex-items-center px-12 md:px-48 justify-center flex-col">
                    {!loading && wishlist.length > 0 && wishlist.map((item, index) => {
                        return <div key={index} className="text-gray-800 w-full bg-white shadow-lg border border-1 my-3 rounded-xl">
                            <div className="md:flex p-2">
                                <div className="flex items-center justify-center">
                                    <div className="border overflow-hidden rounded-xl">
                                        <Image height={100} width={100} src={item.images[0]} alt={item.name} />
                                    </div>
                                </div>
                                <div className="p-2 flex flex-col items-center md:items-start">
                                    <div className="font-bold text-gray-800 my-1">{item.name}</div>
                                    <div className="text-sm text-gray-500 my-1 text-center md:text-left">{item.description}</div>
                                    <div className="border rounded-md w-fit px-2 text-xs p-1 border-gray-300">
                                        <label className="font-bold text-xs m-1" htmlFor="size">Size</label>
                                        <select className="px-2 p-1 rounded-md" id="size" name="size">
                                            <option className="px-2 text-center" value="xs">XS</option>
                                            <option className="px-2" defaultValue value="s">S</option>
                                            <option className="px-2" value="m">M</option>
                                            <option className="px-2" value="l">L</option>
                                        </select>
                                    </div>
                                    <div><span className="font-bold my-3">Price:</span> £ {item.price}</div>
                                    <div className="text-xs font-bold text-green-800">You saved 12% OFF</div>
                                </div>
                            </div>
                            <div className="px-4">
                                <hr />
                                <div className="flex justify-between p-2">
                                    <div onClick={() => { toggleCart(item) }} className="font-bold text-sm cursor-pointer text-blue-900">{item.cart ? "Added" : "Add"} to Cart</div>
                                    <div onClick={() => { toggleWishlist(item) }} className="text-blue-900 text-sm font-bold cursor-pointer">Remove</div>
                                </div>
                            </div>
                        </div>
                    }
                    )}
                </div>
            </div>
            <AddProduct items={items} />
            <Footer />
            <div className="h-16 md:h-0"></div>
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