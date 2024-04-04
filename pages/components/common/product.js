
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext } from 'react';
import { MyContext } from '../../../context/createContext';

export default function ProductDisplay({ product }) {
    const { products, toggleCart, toggleWishlist } = useContext(MyContext);
    

    if( !product || !product.id  || !product.name || !product.price ) return <div>Product not found</div>;

    return <div className='w-fit greatvibes mx-3 inline-block'>
        <div className="border relative md:md:hover:scale-105 transition duration-500 rounded-lg overflow-hidden">
            <div className="absolute w-full flex justify-between">
                <div onClick={()=>{toggleCart(product)}} className="p-2 bg-white border w-fit rounded-md m-2 hover:bg-pink-100 hover:border-pink-400">
                    <Image alt='cart' src={products[product.id] != undefined && products[product.id].cart ? '/icons/carted.png' : '/icons/cart.png'} className="h-6 w-6" height={20} width={20} />
                </div>
                <div onClick={()=>{toggleWishlist(product)}} className="p-2 bg-white border w-fit rounded-md m-2 hover:bg-pink-100 hover:border-pink-400">
                    <Image alt='liked' src={products[product.id] != undefined && products[product.id].liked ? '/icons/liked.png' : '/icons/heart.png'} className="h-6 w-6" height={20} width={20} />
                </div>
            </div>
            <Link href={"/buy/" + product.id}>
                <Image src={product.images[0]} alt="product" height={300} width={300} className="w-52 h-68" />
                <div className="text-gray-700 font-bold">{product.name}</div>
                <div className="text-gray-700 text-md font-bold">€{product.price}</div>
            </Link>
        </div>
    </div>
}