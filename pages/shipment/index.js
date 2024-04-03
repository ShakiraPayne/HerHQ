import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";
import Link from "next/link";

const shipments = [
    { deliveryId: 123456, status: 'Shipped', deliveryDate: 'January 13th, 2022' },
    { deliveryId: 654321, status: 'Shipped', deliveryDate: 'January 13th, 2022' },
    { deliveryId: 214365, status: 'In Progress', deliveryDate: 'January 13th, 2022' },
    { deliveryId: 654321, status: 'In Progress', deliveryDate: 'January 13th, 2022' }
]

export default function Shipment({ shipments }) {
    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="flex flex-col items-center">
                <div className="min-w-96">
                    <div className="text-center text-3xl font-bold my-6">Track Shipment</div>
                    <p className="p-4">Your orders which are in progress or which are delivered today will be visible here.</p>
                    <div className="p-5 m-4 border border-gray-100 rounded-lg bg-gray-100">
                        <time className="text-lg font-semibold text-gray-900 my-2">On January 13th, 2022</time>
                        {shipments.length == 0 && <div className="text-center text-gray-500">No shipments found</div>}

                        { shipments.length > 0 && <div>
                            {shipments.map((shipment, index) => {
                                return <div key={index} className="bg-white rounded-md mt-2 flex text-center justify-around">
                                    <div className="w-full p-2">{shipment.deliveryId}</div>
                                    <div className="w-full p-2 flex items-center justify-center">
                                        <Link href={'/track'}>
                                            <div className="text-blue-600 underline">{shipment.status}</div>
                                        </Link>
                                        <div className={`h-4 w-4 ${shipment.status == 'Shipped' ? 'bg-green-600' : 'bg-yellow-400'} rounded-full ml-2`}></div>
                                    </div>
                                </div>
                            })}
                        </div> }

                    </div>
                    <p className="p-4">If you find anything unusual, then contact our support assistant.</p>
                </div>
            </div>
            <Footer />
            <div className="h-16"></div>
        </div>
    )
}


export async function getServerSideProps() {
    // Create shipment array.
    return {
        props: {
            shipments
        }
    }
}