import Image from "next/image";
import { useContext, useState } from "react"
import { MyContext } from '@/context/createContext';

export default function CartProduct({ item }) {
    const { toggleCart, toggleWishlist, sizeUpdate, qtyUpdate } = useContext(MyContext);

    const [qty, setQty] = useState(item.quantity);

    const incrementQty = () => {
        qtyUpdate(item.id, qty + 1);
        setQty(qty + 1);
    }

    const decrementQty = () => {
        if (qty > 1) {
            qtyUpdate(item.id, qty - 1);
            setQty(qty - 1);
        }
    }

    const sizeHandleChange = (e) => {
        sizeUpdate(item.id, e.target.value);
    }

    return <div className="text-gray-800 w-full bg-white shadow-lg border border-1 my-3 rounded-xl">
        <div className="md:flex p-2">
            <div className="flex items-center justify-center">
                <div className="border overflow-hidden rounded-xl">
                    <Image height={100} width={100} src={item.images[0]} alt={item.name} />
                </div>
            </div>
            <div className="p-2 px-4">
                <div className="font-bold md:text-left text-center w-full text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-500 md:text-left text-center">{item.description}</div>
                <div className="flex flex-wrap">
                    <div className="flex p-1 items-center gap-3 px-2 border w-fit rounded-lg m-2 border-gray-300">
                        <div className="text-xs font-bold text-blue-40">Quantity</div>
                        <div onClick={decrementQty} className="cursor-pointer">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="px-2 border-2 shadow-xl bg-gray-200 rounded-md">{qty}</div>
                        <div onClick={incrementQty} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="plus"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 1v14M1 8h14"></path></g></svg>
                        </div>
                    </div>
                    <div className="border rounded-md w-fit m-2 px-2 text-xs p-1 border-gray-300">
                        <label className="font-bold text-xs m-1" htmlFor="size">Size</label>
                        <select onClick={sizeHandleChange} className="px-2 p-1 rounded-md" id="size" name="size">
                            <option className="px-2 text-center" value="xs">XS</option>
                            <option className="px-2" defaultValue value="s">S</option>
                            <option className="px-2" value="m">M</option>
                            <option className="px-2" value="l">L</option>
                        </select>
                    </div>
                </div>
                <div className="text-center md:text-left"><span className="font-bold my-3">Price:</span> € {item.price}</div>
                <div className="text-xs font-bold md:text-left text-center text-green-800">You saved 12% money</div>
            </div>
        </div>
        <div className="px-4">
            <hr />
            <div className="flex justify-between p-2">
                <div onClick={ () => { toggleWishlist(item) } } className="font-bold text-sm cursor-pointer text-blue-800">{item.liked ? "Added" : "Add"} to Wishlist</div>
                <div onClick={() => { toggleCart(item) }} className="text-blue-800 text-sm font-bold cursor-pointer">Remove</div>
            </div>
        </div>
    </div>
}