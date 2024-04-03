import Image from "next/image";
import { useContext } from "react"
import { MyContext } from '@/context/createContext';

export default function CartProduct({ item }) {
    const { toggleCart, toggleWishlist, sizeUpdate, qtyUpdate } = useContext(MyContext);
    const qtyHandleChange = (e) => {
        qtyUpdate(item.id, e.target.value);
    }

    const sizeHandleChange = (e) => {
        sizeUpdate(item.id, e.target.value);
    }

    return <div className="text-gray-800 bg-white max-w-[320px] w-full rounded-xl overflow-hidden my-2">
        <div className="flex justify-between">
            <div className="max-w-40">
                <Image height={300} width={300} src={item.images[0]} alt={item.name} className="w-40 object-cover" />
            </div>
            <div className="p-3 flex flex-col w-full bg-red-200 items-center justify-center text-center gap-2 w-full">
                <div className="font-bold">{item.name}</div>
                <div className="flex ">
                    <div onClick={() => { toggleCart(item) }} className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                        <svg width="20px" height="20px" viewBox="0 -5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssketch="http://www.bohemiancoding.com/sketch/ns">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchtype="MSPage">
                                <g id="Icon-Set-Filled" sketchtype="MSLayerGroup" transform="translate(-518.000000, -1146.000000)" fill="#000000">
                                    <path d="M540.647,1159.24 C541.039,1159.63 541.039,1160.27 540.647,1160.66 C540.257,1161.05 539.623,1161.05 539.232,1160.66 L536.993,1158.42 L534.725,1160.69 C534.331,1161.08 533.692,1161.08 533.298,1160.69 C532.904,1160.29 532.904,1159.65 533.298,1159.26 L535.566,1156.99 L533.327,1154.76 C532.936,1154.37 532.936,1153.73 533.327,1153.34 C533.718,1152.95 534.352,1152.95 534.742,1153.34 L536.981,1155.58 L539.281,1153.28 C539.676,1152.89 540.314,1152.89 540.708,1153.28 C541.103,1153.68 541.103,1154.31 540.708,1154.71 L538.408,1157.01 L540.647,1159.24 L540.647,1159.24 Z M545.996,1146 L528.051,1146 C527.771,1145.98 527.485,1146.07 527.271,1146.28 L518.285,1156.22 C518.074,1156.43 517.983,1156.71 517.998,1156.98 C517.983,1157.26 518.074,1157.54 518.285,1157.75 L527.271,1167.69 C527.467,1167.88 527.723,1167.98 527.979,1167.98 L527.979,1168 L545.996,1168 C548.207,1168 550,1166.21 550,1164 L550,1150 C550,1147.79 548.207,1146 545.996,1146 L545.996,1146 Z" id="delete" sketchtype="MSShapeGroup"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div onClick={() => { toggleWishlist(item) }} className="p-2 hover:bg-gray-200 rounded-md">
                        <Image height={20} width={20} src={item.liked ? "/icons/liked.png" : "/icons/dark/heart.png"} alt="heart" className="w-6" />
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded-md">
                        <svg width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex">
                    <div className="text-center m-2">
                        <label className="font-bold m-1 text-sm" htmlFor="size">Qty</label>
                        <select onChange={qtyHandleChange} className="px-2 p-1 rounded-md" id="size" name="size">
                            <option className="px-2 text-center" value="1">1</option>
                            <option className="px-2" value="2">2</option>
                            <option className="px-2" value="3">3</option>
                            <option className="px-2" value="4">4</option>
                        </select>
                    </div>
                    <div className="text-center m-2">
                        <label className="font-bold text-sm m-1" htmlFor="size">Size</label>
                        <select onChange={sizeHandleChange} className="px-2 p-1 rounded-md" id="size" name="size">
                            <option className="px-2 text-center" value="xs">XS</option>
                            <option className="px-2" defaultValue={true} value="s">S</option>
                            <option className="px-2" value="m">M</option>
                            <option className="px-2" value="l">L</option>
                        </select>
                    </div>
                </div>
                <div className="bg-gray-300 p-2 rounded-xl">
                    <span className="text-gray-700 font-xl">Price: </span><span className="font-bold">${item.price}</span>
                </div>
            </div>
        </div>
    </div>
}