import Image from "next/image"
import Contact from "@/pages/components/common/contact"
import Header from "@/pages/components/common/header"
import Footer from "@/pages/components/common/footer"

export default function Processing() {
    return (
        <div className={`portslat min-h-screen h-full relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="w-full my-4">
                <div className="w-full flex items-center justify-center">
                    <Image src={'/icons/tick.png'} width={200} height={200} alt="tick" />
                </div>
                <div className="w-full text-center text-3xl font-bold text-green-600">Your order is being processed and soon will be visible in orders.</div>
                <div className="w-full text-center text-lg text-gray-600">We will notify you once your order is verified and ready.</div>
                <div className="w-full text-center text-lg text-gray-600">Thank you for shopping with us</div>
                <div className="w-full text-center text-lg text-gray-600">You can check <span className="font-bold">orders in settings</span>, and status on <span className="font-bold">tracking shipments.</span></div>
            </div>
            <Footer />
            <div className="md:h-0 h-16"></div>
        </div>
    )
}