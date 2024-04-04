import Product from "./product"

export default function AddProduct({items}) {
    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold">You May Also Like</h1>
            <div className="overflow-x-auto whitespace-nowrap p-6 md:mx-32">
                {
                    items && Array.isArray(items) && items.map((item, index) => {
                        return <Product key={index} product={item} />
                    })
                }
            </div>
        </div>
    )
}
