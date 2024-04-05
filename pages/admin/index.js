import { useEffect, useRef, useState } from 'react';
import Contact from '../components/common/contact';
import Header from '../components/common/header';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Order from '../components/admin/inputOrder';
import Product from '../components/admin/product';

export default function Admin() {
    const nameRef = useRef();
    const priceRef = useRef();
    const colorRef = useRef();
    const imgSrcRef = useRef();
    const ratingRef = useRef();
    const descriptionRef = useRef();

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [orders, setOrders] = useState([{ time: "1777777777777", paymentIntent: "loading", email: "loading", contactDetails: "loading", cart: [{ name: 'Loading', images: ['/icons/logo.png'], quantity: 1, price: 1 }] }]);

    const fetchDetails = async () => {
        setLoading(true);
        const notify = toast.loading('Fetching Details!');
        try {
            const response = await fetch('/api/adminProducts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });
            const data = await response.json();
            if (data.success) {
                const products = data.products;
                setProducts(products);
                const orderFetch = data.orders;
                setOrders(orderFetch);
                toast.success('Details Fetched', { id: notify });
            }
            else {
                toast.error(data.message, { id: notify });
            }
        } catch (error) {
            toast.error('Error Occurred', { id: notify });
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchDetails();
    }, []);



    const addProduct = async () => {
        const notify = toast.loading('Adding Product');
        try {
            const name = nameRef.current.value;
            const price = priceRef.current.value;
            const color = colorRef.current.value;
            const imgSrc = imgSrcRef.current.files;
            const rating = ratingRef.current.value;
            const description = descriptionRef.current.value;
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('color', color);
            formData.append('rating', rating);
            formData.append('description', description);
            formData.append('token', token);
            for (let i = 0; i < imgSrc.length && i < 4; i++) {
                formData.append('images', imgSrc[i]);
            }
            const response = await fetch('/api/addProduct', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                toast.success(data.message, { id: notify });
                const newProduct = data.product;
                setProducts([...products, newProduct]);
            } else {
                toast.error(data.message, { id: notify });
            }
        } catch (error) {
            toast.error('Error Occurred', { id: notify });
        }
        setShowAddForm(!showAddForm);
    }

    return (
        <div className={`portslat relative min-h-screen h-full max-w-screen overflow-auto relative pb-16 bg-white`}>
            {
                showAddForm && <div className="fixed flex items-center justify-center z-50 w-dvw h-dvh min-w-screen min-h-screen">
                    <div className="min-h-screen min-w-screen bg-gray-500 w-dvw h-dvh opacity-30"></div>
                    <div className="absolute w-full px-4 md:flex md:items-center md:justify-center">
                        <div className="bg-white overflow-x-scroll max-w-xl p-4 rounded-xl">
                            <div className="flex items-center justify-between pb-4">
                                <h1 className="text-center w-full font-bold text-xl text-gray-900">Add Product</h1>
                                <Image alt="Add Form" onClick={() => { setShowAddForm(!showAddForm) }} src={'https://res.cloudinary.com/dcpqx91e5/image/upload/v1711391378/herhq/icons/mtxne8wzz44rwprx72av.png'} className="md:h-6 md:w-6 cursor-pointer" height={30} width={30} />
                            </div>
                            <div className="grid gap-4 grid-cols-2 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="name" className="block mb-1 font-bold text-[13px] text-gray-900">Product Name</label>
                                    <input ref={nameRef} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Type product name" required="" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="name" className="block mb-1 font-bold text-[13px] text-gray-900">Min Price <span className="font-medium">{"( In EURO )"}</span></label>
                                    <input ref={priceRef} type="number" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Minimum Price" required="" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="name" className="block mb-1 font-bold text-[13px] text-gray-900">Color</label>
                                    <input ref={colorRef} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Color Of Product" required="" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block mb-1 text-[13px] font-bold text-gray-900" htmlFor="file_input">Upload Photo</label>
                                    <input ref={imgSrcRef} multiple className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50  focus:outline-none p-2" id="file_input" type="file" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="name" className="block mb-1 font-bold text-[13px] text-gray-900">Rating</label>
                                    <input ref={ratingRef} type="number" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Out of Five" required="" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="name" className="block mb-2 font-bold text-sm text-gray-900">Description</label>
                                    <textarea ref={descriptionRef} type="number" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Describe the product." required="" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <div onClick={addProduct} className="px-3 cursor-pointer p-2 w-fit rounded-lg bg-gray-700 text-white">Save Button</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
            <Contact />
            <Header />
            <div className="p-6 overflow-auto">
                <div className="border min-w-[930px]">
                    <h1 className="xl:m-12 m-2 text-[18px]"><span className="text-gray-500">Products {"/"}</span> <span className="text-gray-700">Product details</span></h1>
                    <div className="min-w-[900px] rounded-xl border m-2 xl:m-12 xl:w-2/3">
                        <div className="grid grid-cols-2 p-6 px-12 cursor-pointer">
                            <h2 className="font-bold text-xl">Varients</h2>
                            <div className="flex justify-end">
                                <h2 onClick={() => { setShowAddForm(!showAddForm) }} className="w-fit p-2 px-2 text-[13px] hover:text-blue-400 text-gray-600 hover:bg-blue-50"> + Add Varient</h2>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="grid px-12 p-2 place-content-center text-gray-600 grid-cols-10 bg-blue-50 uppercase text-[13px]">
                                <div className="col-span-1 p-2">
                                    <input type="checkbox" />
                                </div>
                                <div className="col-span-1 p-2">Image</div>
                                <div className="col-span-2 p-2">Name</div>
                                <div className="col-span-2 p-2">Color</div>
                                <div className="col-span-2 p-2">Price</div>
                                <div className="col-span-2 p-2">Edit</div>
                            </div>
                            <div>
                                {
                                    loading && <div className="p-2"><Skeleton count={8} width={"100%"} /></div>
                                }
                                {
                                    !loading && products.length == 0 && <div className="p-12 flex bg-gray-50 items-center justify-center">
                                        <div className="text-gray-500">No Products Found</div>
                                    </div>
                                }
                                {
                                    !loading && products.map((product, index) => {
                                        return <Product key={index} products={products} setProducts={setProducts} product={product} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <h1 className="xl:m-12 m-2 text-[18px]"><span className="text-gray-500">Orders {"/"}</span> <span className="text-gray-700">Order details</span></h1>
                    <div className="rounded-xl overflow-x-scroll border m-2 xl:m-12 xl:w-2/3">
                        <div className="flex justify-between p-6 px-12 cursor-pointer">
                            <h2 className="font-bold">Orders</h2>
                            <h2 className="p-2 px-2 text-[13px] hover:text-blue-400 text-gray-600 hover:bg-blue-50">Download CSV</h2>
                        </div>
                        <div className="text-center overflow-x-scroll">
                            <div className="grid px-12 p-2 place-content-center text-gray-600 grid-cols-12 bg-blue-50 uppercase text-[13px]">
                                <div className="col-span-2 p-2">Order Id</div>
                                <div className="col-span-2 p-2">Date & Time</div>
                                <div className="col-span-3 p-2">Customer</div>
                                <div className="col-span-3 p-2">Contact</div>
                                <div className="col-span-2 p-2 text-left ml-3">Tracking</div>
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
                                        else {
                                            return <Order key={index} order={order} />
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-16 md:h-0"></div>
        </div>
    )
}