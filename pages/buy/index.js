import { getProducts } from "../../utils/mongodb";
import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";
import Product from "../components/common/product";
import { useState } from "react";

const BuyPage = ({ items }) => {

    const [productList, setProductList] = useState(items);


    const handleChange = (e) => {
        const sortedProducts = [...productList];
        if (e.target.value === "Price") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (e.target.value === "Rating") {
            sortedProducts.sort((a, b) => b.rating - a.rating);
        } else {
            sortedProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
        }
        setProductList(sortedProducts);
    }

    return (
        <div className={`portslat min-h-screen h-full relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="md:mt-6">
                <div className="flex gap-4 my-4 greatvibes items-center justify-center w-full" >
                    <div className="font-bold">Sort By:</div>
                    <div>
                        <select onChange={handleChange} className="p-2 px-6 rounded-md">
                            <option>Price</option>
                            <option>Rating</option>
                            <option>Varities</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 md:gap-8 greatvibes justify-center md:p-12 md:px-40 text-center">
                    {
                        productList.map((product, index) => {
                            return <Product key={index} product={product} />
                        })
                    }
                </div>
            </div>
            <Footer />
            <div className="md:h-0 h-16"></div>
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

export default BuyPage;