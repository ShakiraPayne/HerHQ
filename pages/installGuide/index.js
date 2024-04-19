import Contact from "../components/common/contact";
import Footer from "../components/common/footer";
import Header from "../components/common/header";

export default function InstallGuide() {
    return (
        <div className="p-4 md:p-8">
            <Contact />
            <Header />
            <div className="max-w-3xl md:pt-8 pt-6 mx-auto">
                <h1 className="font-bold text-gray-800 text-2xl mb-6">Installation Steps:</h1>
                <div className="mt-4">
                    <h1 className="text-xl font-semibold text-gray-800">In Safari</h1>
                    <ol className="list-decimal pl-4 text-gray-600">
                        <li>Click on the Share button in the Safari browser.</li>
                        <li>Click on the Add to Home Screen button.</li>
                        <li>Click on the Add button.</li>
                        <li>On the home screen, you can see the app named HerHQ.</li>
                    </ol>
                </div>
                <div className="mt-8">
                    <h1 className="text-xl font-semibold text-gray-800">In Chrome</h1>
                    <ol className="list-decimal pl-4 text-gray-600">
                        <li>Click on the three dots in the Chrome browser.</li>
                        <li>Click on the Add to Home Screen button.</li>
                        <li>Click on the Add button.</li>
                        <li>On the home screen, you can see the app named HerHQ.</li>
                    </ol>
                </div>
            </div>
            <Footer />
            <div className="md:h-0 h-16"></div>
        </div>
    );
}