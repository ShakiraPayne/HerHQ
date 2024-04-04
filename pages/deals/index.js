import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Image from "next/image";

const products = [
    { discount: 10, dynamicPrice:210, rating: 4.5, name: "&Vogue", img: "/product/img1.jpg", price: 200, stock: false, id: "london4" },
    { discount: 10, dynamicPrice:210, rating: 3.4, name: "London Love", img: "/product/img2.jpg", price: 100, stock: true, id: "london5" },
    { discount: 10, dynamicPrice:210, rating: 5, name: "&Vogue", img: "/product/img3.jpg", price: 200, stock: false, id: "london6" },
    { discount: 10, dynamicPrice:210, rating: 4.7, name: "London Love", img: "/product/img4.jpg", price: 100, stock: true, id: "london7" },
    { rdiscount: 10, dynamicPrice:210, ating: 4.2, name: "&Vogue", img: "/product/img5.jpg", price: 200, stock: false, id: "london8" }
]

export default function Deals() {
    return (
        <div className={`portslat min-h-screen h-full relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div>
                <div className="mx-4 p-6 flex items-center justify-center">
                    <div className="w-6 mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 384 511.4"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="163.52" y1="286.47" x2="163.52" y2="500.71"><stop offset="0" stopColor="#FB6404" /><stop offset="1" stopColor="#F2BE10" /></linearGradient></defs><path fill="#E20919" d="M77.46 228.43C65.33 119.85 128.78 43.48 247.72 0c-72.85 94.5 62.09 196.88 69.53 295.03 17.44-29.75 27.34-69.48 29.3-122.55 89.18 139.92 15.25 368.59-181.02 335.73-18.02-3.01-35.38-8.7-51.21-17.17C42.76 452.8 0 369.53 0 290c0-50.69 21.68-95.95 49.74-131.91 3.75 35.23 11.73 61.51 27.72 70.34z" /><path fill="url(#a)" d="M139.16 372.49c-21.83-57.66-18.81-150.75 42.33-183.41.43 107.03 103.57 120.64 84.44 234.9 17.64-20.39 26.51-53.02 28.1-78.75 27.96 65.38 6.04 117.72-33.81 144.37-121.15 81-225.48-83.23-156.11-173.26 2.08 20.07 26.14 51.12 35.05 56.15z" /></svg>
                    </div>
                    <p className="text-2xl text-red-700">Hot Price Offers</p>
                    <div className="mx-6">
                        <Image height={40} width={40} src={"https://res.cloudinary.com/dcpqx91e5/image/upload/v1711391396/herhq/icons/mfgnwjmeoxx3lnmellhz.jpg"} alt="Hot Deal" className="w-20 h-20" />
                    </div>
                </div>
                <div className="hotdeal flex flex-wrap gap-6 p-2 md:px-12 justify-center">
                    {
                        products.map((product, index) => {
                            return (
                                <div key={index} className="border border-2 w-fit rounded-xl overflow-hidden">
                                    <div className="bg-red-600 font-bold p-2 text-white text-center">{product.discount}% OFF SALE</div>
                                    <Image height={300} width={180} src={product.img} alt="Image 1" className="h-40 w-36 sm:w-44 sm:h-60 md:w-60 md:h-80" />
                                    <div className="p-1 text-md text-center"><span className="text-red-800 line-through">€{product.dynamicPrice}</span> <span className="text-gray-800">€{product.price}</span></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="h-16"></div>
        </div>
    )
}