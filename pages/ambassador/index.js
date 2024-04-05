import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function Home() {

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();
    const instagramRef = useRef();
    const facebookRef = useRef();
    const snapchatRef = useRef();
    const ticTocRef = useRef();
    const youtubeRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        const notify = toast.loading("Submitting your application");
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const message = messageRef.current.value;
        const instagram = instagramRef.current.checked;
        const facebook = facebookRef.current.checked;
        const snapchat = snapchatRef.current.checked;
        const ticToc = ticTocRef.current.checked;
        const youtube = youtubeRef.current.checked;
        if(name && email && phone && message) {
            try{
                fetch("/api/ambassador", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, phone, message, instagram, facebook, snapchat, ticToc, youtube })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.added) {
                            toast.success("Application submitted successfully", { id: notify });
                        }
                        else {
                            toast.error("Failed to submit application", { id: notify });
                        }
                })
            }
            catch(err){
                toast.error("Failed to submit application", { id: notify });
            }
        }
        else{
            toast.error("Please fill all the fields", { id: notify });
        }
    }

    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="mt-6 flex flex-col items-center">
                <div className="max-w-lg">
                    <div className="p-4">
                        <h1 className="text-center font-bold text-xl font-mono md:text-2xl">Become a <span className="text-pink-600">HHQ Ambassador</span></h1>
                        <h2 className="my-6 text-center">HHQ are looking to partner with females around the world</h2>
                        <hr className="ml-6 w-1/3" />
                        <p className="p-2 mt-4 text-sm"><span className="text-pink-600">That are keen to represent and the face of our brand.</span> If this is something that you are interested in, please fill out the below field and we will come back to you if your application is successful.</p>
                    </div>
                    <div>
                        <h1 className="mx-3 font-bold text-xl">Fill Your Details:</h1>
                        <form className="p-4 text-sm">
                            <div className="flex flex-col my-2">
                                <label htmlFor="name" className="font-bold my-2">Name:</label>
                                <input ref={nameRef} type="text" id="name" name="name" className="border-2 border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="email" className="font-bold my-2">Email:</label>
                                <input ref={emailRef} type="email" id="email" name="email" className="border-2 border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="font-bold my-2">Telephone:</label>
                                <input ref={phoneRef} type="text" id="phone" name="phone" className="border-2 border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className="flex flex-wrap my-2">
                                <div className="flex items-center m-2">
                                    <input value="helo" ref={instagramRef} id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900300">Instagram</label>
                                </div>
                                <div className="flex items-center m-2">
                                    <input value="" ref={facebookRef} id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900300">Facebook</label>
                                </div>
                                <div className="flex items-center m-2">
                                    <input value="" ref={snapchatRef} id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900300">Snapchat</label>
                                </div>
                                <div className="flex items-center m-2">
                                    <input value="" ref={ticTocRef} id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900300">Tic Toc</label>
                                </div>
                                <div className="flex items-center m-2">
                                    <input value="" ref={youtubeRef} id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900300">Youtube</label>
                                </div>
                            </div>
                            <div className="flex flex-col my-2">
                                <label className="font-bold my-2" htmlFor="message">Message {"( Add Social Media ID's ) "}:</label>
                                <textarea ref={messageRef} rows={"4"} id="message" name="message" className="border-2 border-gray-300 p-2 rounded-md"></textarea>
                            </div>
                            <div className="flex flex-col my-4 text-center text-md">
                                <div onClick={handleClick} className="bg-gray-600 text-white p-2 rounded-md">Submit</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            <div className="h-16"></div>
        </div>
    )
}