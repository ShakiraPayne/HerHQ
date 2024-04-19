import Contact from "../components/common/contact"
import Footer from "../components/common/footer"
import Header from "../components/common/header"

export default function InstallGuide() {
    return <div>
        <Contact />
        <Header />
        <div>
            <h1 className="font-bold text-2xl">Installation Steps:</h1>
            <div className="mt-4">
                <h1 className="text-xl font-semibold">In Safari</h1>
                <ol>
                    <li>Click on the Share button in the Safari browser.</li>
                    <li>Click on the Add to Home Screen button.</li>
                    <li>Click on the Add button.</li>
                    <li>On home screen, you can see the app named HerHq.</li>
                </ol>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-semibold">In Chrome</h1>
                <ol>
                    <li>Click on the three dots in the Chrome browser.</li>
                    <li>Click on the Add to Home Screen button.</li>
                    <li>Click on the Add button.</li>
                    <li>On home screen, you can see the app named HerHq.</li>
                </ol>
            </div>
        </div>
        <Footer />
        <div className="md:h-0 h-16"></div>
    </div>
}