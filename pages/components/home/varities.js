import Image from "next/image"
import Link from "next/link"

export default function Varities() {
    return (
        <div className="p-3 text-2xl block font-bold bg-gray-100 nerkoone">
            <h1 className="text-center my-10 mt-6 vibes">SHOP NOW</h1>
            <Link href={'/buy'}>
                <div className="grid md:grid-cols-4 gap-4 grid-cols-2 md:px-16 md:gap-6 text-xl sm:text-md greatvibes font-bold text-center">
                    <div className="rounded-xl bg-white overflow-hidden">
                        <Image height={500} width={300} src="/product/img1.jpg" alt="Sorry N Sorry" />
                        <h2>Sorry N Sorry</h2>
                    </div>
                    <div className="rounded-xl bg-white overflow-hidden">
                        <Image height={500} width={300} src="/product/img8.jpg" alt="&Vogue" />
                        <h2>Not So Basic</h2>
                    </div>
                    <div className="rounded-xl bg-white overflow-hidden">
                        <Image height={500} width={300} src="/product/img10.jpg" alt="Not So Basic" />
                        <h2>&Vogue</h2>
                    </div>
                    <div className="rounded-xl bg-white overflow-hidden">
                        <Image height={500} width={300} src="/product/img4.jpg" alt="So Fire" />
                        <h2>So Fire</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}