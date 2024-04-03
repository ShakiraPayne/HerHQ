import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";

export default function Home() {
    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="raleway md:px-24 px-6 md:mt-12 md:text-md">
                <h1 className="font-bold text-center text-xl py-3">STORE POLICY</h1>
                <div className="p-3">
                    <div className="my-3">
                        <h1 className="font-bold py-2 text-center">1. Terms of Use.</h1>
                        <p className="text-xs md:text-sm">As part of these Website Terms of Use, your use of this site is also subject to our Privacy Policy and our Returns Policy , which are incorporated by reference into these Website Terms of Use.
                            <br /><br />
                            Legal capacity to transact
                            <br /><br />
                            If you are under 18 years of age, you cannot place orders through this site. By using this site you represent and warrant to the Company that you are over the age of 18 years. Should the Company suffer any damage or other losses as a result of a transaction entered into by a minor, we reserve the right to seek compensation for such losses from his/her parents or guardians</p>
                    </div>
                    <div className="my-3">
                        <h1 className="font-bold py-2 text-center">2. Privacy Policy.</h1>
                        <p className="text-xs md:text-sm">We will treat all personal information in accordance with any and all obligations that are binding upon us under the Privacy Act {"("}“Privacy Act”{")"}. The Privacy Act lays down 13 key principles in relation to the collection and treatment of personal information, which are called the “Privacy Principles”.
                        </p>
                    </div>
                    <div className="my-3">
                        <h1 className="font-bold py-2 text-center">3. Return Policy.</h1>
                        <p className="text-xs md:text-sm">
                        HHQ does not allow refunds for Swimwear or accessories at present. Please refer to our returns policy and shipping policy for entire store policy details.
                        </p>
                    </div>
                    <div className="my-3">
                        <h1 className="font-bold py-2 text-center">4. Modify or Return Order.</h1>
                        <p className="text-xs md:text-sm">
                        Due to our efforts to ensure that you receive your order as quickly as possible, we are unable to cancel or make changes to your order after you have placed it with us. If we have mailed off a package and it is returned to us due to an incorrect/ undeliverable address, we will issue store credit for the net total minus the shipping fee.<br/><br/> You will be held responsible for the initial cost of shipping the package.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <div className="h-16 md:h-0"></div>
        </div>
    )
}