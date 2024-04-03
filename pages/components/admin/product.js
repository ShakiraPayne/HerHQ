import Image from "next/image";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function Product({ product, products, setProducts }) {
    const nameRef = useRef();
    const colorRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    if(!product || !products || !setProducts || product.images?.length == 0 || !product._id || !product.name || !product.color || !product.price || !product.description){
        return <div>Invalid Product</div>;
    } 

    const deleteProduct = async (productId) => {
        const notify = toast.loading('Deleting Product');
        const data = await fetch('/api/deleteProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ productId, token: localStorage.getItem('token') })
        });
        const response = await data.json();
        if (response.success) {
            const newProducts = products.filter(product => product._id !== productId);
            setProducts(newProducts);
            toast.success(response.message, { id: notify });
        } else {
            toast.error(response.message, { id: notify });
        }
    }

    const updateProduct = async () => {
        const notify = toast.loading('Updating Product');
        const name = nameRef.current.value || product.name;
        const color = colorRef.current.value || product.color;
        const price = priceRef.current.value || product.price;
        const description = descriptionRef.current.value || product.description;
        const data = await fetch('/api/updateProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ productId: product._id, name, color, price, description, token: localStorage.getItem('token') })
        });
        toast.success('Product Updated', { id: notify });
    }

    return (
        <div>
            <div className="grid grid-cols-10 place-content-center px-12 p-2 items-center text-gray-700 justify-around">
                <div className="col-span-1">
                    <input type="checkbox" />
                </div>
                <div className="col-span-1 flex justify-center">
                    {product.images?.length > 0 && (
                        <Image height={40} width={30} src={product.images[0]} alt="product" className="w-10 h-10" />
                    )}
                </div>
                <div className="h-fit col-span-2">
                    <input ref={nameRef} type="text" className="w-40 rounded-lg p-2 px-3 border text-center h-fit placeholder-gray-700" placeholder={product.name} />
                </div>
                <div className="h-fit col-span-2">
                    <input ref={colorRef} type="text" className="w-32 rounded-lg p-2 px-3 border text-center h-fit placeholder-gray-700" placeholder={product.color} />
                </div>
                <div className="px-2 flex justify-center w-full col-span-2">
                    <div className="border rounded-md p-2 w-fit">
                        <span className="text-gray-400">EUR </span>
                        <input ref={priceRef} className="w-16 placeholder-gray-700 outline outline-0" placeholder={product.price} type="text" />
                    </div>
                </div>
                <div className="col-span-2 w-full flex justify-center cursor-pointer text-[13px] text-gray-700 group rounded-md flex hover:text-blue-500">
                    <div onClick={updateProduct} className="border group-hover:border-0 rounded-l-md border-r-0 p-3 hover:bg-blue-50">
                        Update
                    </div>
                    <div onClick={() => { deleteProduct(product._id) }} className="p-3 border group-hover:border-0 rounded-r-md hover:bg-blue-50">Delete</div>
                </div>
            </div>
            <div className="text-sm">
                <input ref={descriptionRef} className="outline outline-0 text-center" type="text" placeholder={product.description} />
            </div>
            <hr className="my-2" />
        </div>
    );
}
