import Contact from "../components/common/contact"
import Footer from "../components/common/footer"
import Header from "../components/common/header"

export default function InstallGuide() {
    return <div>
        <Contact />
        <Header />
        <div className="min-h-screen h-full relative pb-16 bg-white">
            <div className="md:mt-6">
                <div className="flex gap-4 my-4 greatvibes items-center justify-center w-full" >
                    <div className="font-bold">Install Guide:</div>
                </div>
                <div className="flex flex-wrap gap-6 md:gap-8 greatvibes justify-center md:p-12 md:px-40 text-center">
                    <div className="text-2xl">Install Guide</div>
                </div>
            </div>
        </div>
        <Footer />
        <div className="md:h-0 h-16"></div>
    </div>
}