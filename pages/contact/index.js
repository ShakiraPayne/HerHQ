import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function Home() {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const fileRef = useRef();

    const handleContact = () => {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const message = messageRef.current.value;
        const file = fileRef.current.files[0];

        const notify = toast.loading('Sending Message...');
        if (email && name && message) {
            if (file && file.size > 1024 * 1024) {
                toast.error('File size exceeds 1MB limit.', { id: notify });
                return;
            }
            const formData = new FormData();
            formData.append('email', email);
            formData.append('name', name);
            formData.append('message', message);
            formData.append('file', file);

            fetch("/api/contact", {
                method: "POST",
                body: formData,
            })

            setTimeout(()=>{
                toast.success("Will Contacted Soon", {id : notify});
            }, 1500);
            
        } else {
            toast.error('Please fill all the fields and select an image.', { id: notify });
        }
    }


    return (
        <div className={`portslat h-screen relative pb-16 pt-8 bg-white`}>
            <Contact />
            <Header />
            <div className="flex flex-col items-center">
                <div className="p-2 min-w-80 w-96">
                    <h1 className="font-bold text-xl text-center my-2">Still Need Help?</h1>
                    <div>
                        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input ref={emailRef} type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="name@herhq.co.uk" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>
                            <input ref={nameRef} type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="herhq" />
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="my-3 text-sm">Any Document or file :</div>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-pink-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-pink-600">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF <span className="text-pink-500">(MAX. 800x400px)</span></p>
                                </div>
                                <input ref={fileRef} id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className="my-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea ref={messageRef} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your message here..."></textarea>
                    </div>
                    <div onClick={handleContact} className="m-3 cursor-pointer p-2 bg-gray-600 rounded-md w-fit text-white px-4">Send</div>
                </div>
            </div>
            <Footer />
            <div className="h-16"></div>
        </div>
    )
}