import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";

export default function Questions() {
    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="md:px-32 p-6 md:text-md text-sm">
                <div className="p-3 mb-6">
                    <h1 className="font-bold text-2xl my-6">Our care instructions: How to wash your bikini</h1>
                    <p className="text-sm">
                        Most women only wear a bikini a few weeks a year. Unfortunately, exposure to sunlight, swimming pool chemicals, sunscreen, sweat, and seawater can wreak havoc on your favorite swimsuit or bikini. The result: Faded colors and areas of wear and tear. Help! <span className="font-bold">What’s the best way to care for your swimwear?</span> PrimaDonna answers your burning questions.
                    </p>
                </div>
                <hr />
                <div className="p-3">
                    <h1 className="font-bold text-lg my-6">Should I wash my bikini by hand or in the washing machine?</h1>
                    <p className="text-sm">
                        Tip one: <span className="font-bold">Rinse!</span> After you swim, immediately rinse your bikini or swimsuit in cold or lukewarm water to remove any harmful substances. <span className="font-bold">Tip two:</span> Check the care instructions on the label. Not all fabrics can be machine-washed. Regardless of what the label says, we always recommend washing swimwear <span className="font-bold">by hand</span>. Use cold or lukewarm water and a gentle detergent. Never leave your bikini or swimsuit to soak; you should rinse it immediately.
                    </p>
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg my-6">Machine-washing your swimwear</h1>
                    <div className="text-sm">
                        If you prefer to wash your lingerie or swimwear in the washing machine, that&rsquo;s fine.  <span className="font-bold">What&rsquo;s the best way to care for your swimwear?</span>
                        Just make a habit of it and be sure to follow these three important rules:
                        <br /><br />
                        <ul className="list-disc p-3">
                            <li>Choose the short program for delicate wash</li>
                            <li>Wash with cold or lukewarm water</li>
                            <li>Use a laundry bag</li>
                            <li>If your lingerie or swimwear has sequins, you should ideally wash it by hand.</li>
                        </ul>
                        <br /><br />
                        <span className="font-bold">Our final tip:</span> Never use fabric softener. It can affect the elasticity of the fabric.
                    </div>
                </div>
            </div>
            <Footer />
            <div className="md:h-0 h-16"></div>
        </div>
    )
}