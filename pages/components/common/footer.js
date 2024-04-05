import Link from "next/link";
import { useRef } from "react"
import Image from "next/image";
import { toast } from "react-hot-toast";

export default function Footer() {

    const emailRef = useRef();

    const addEmail = async () => {
        const email = emailRef.current.value;
        if (email === "") return;
        const notify = toast.loading("Adding email to our newsletter list");
        let added = false;
        await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                added = data.added;
            });

        if (added) {
            toast.success("Email added to our newsletter list", { id: notify });
        }
        else {
            notify(() => {
                toast.error("Failed to add email to our newsletter list", { id: notify });
            });
        }
        emailRef.current.value = "";
    }

    return (
        <div className="bg-gray-100 p-4">
            <div className="flex items-center md:justify-around justify-between flex flex-wrap">
                <div className="w-fit">
                    <div className="m-2 rounded-md p-6">
                        <h1 className="font-bold text-lg text-gray-700 py-4">Subscribe to <span className="italic">herhq</span>.</h1>
                        <p className="text-sm py-1">Receive our newsletter on the latest deals and happenings</p>
                        <div className="py-6">
                            <input ref={emailRef} type="email" className="mr-2 bg-transparent outline outline-0" placeholder="example@mail.com" />
                            <hr />
                        </div>
                        <button onClick={addEmail} className="m-2 mt-4 p-2 text-white bg-gray-600 rounded-md">Subscribe</button>
                    </div>
                </div>
                <div className="m-8">
                    <div className="flex justify-start">
                        <span>©</span>
                        <Image priority height={40} width={80} src="https://res.cloudinary.com/dcpqx91e5/image/upload/v1711391395/herhq/icons/ukcqfbti4lz6gxafvpag.png" alt="logo" className="h-12" />
                    </div>
                    <h1 className="text-sm">HER HQ PVT LTD // EST-2020</h1>
                    <h1 className="text-sm">@herhq</h1>
                </div>
            </div>

            <div className="text-center text-gray-700 my-10 flex justify-center flex-wrap">
                <Link href={'/ambassador'}>
                    <h1 className="my-3 w-60">Become Our Ambassador</h1>
                </Link>
                <Link href={'/sizeChart'}>
                    <h1 className="my-3 w-60">Fit Guide {"( Size Chart )"}</h1>
                </Link>
                <Link href={'/policies'}>
                    <h1 className="my-3 w-60">Store Policies</h1>
                </Link>
                <Link href={'/shipment'}>
                    <h1 className="my-3 w-60">Track Shipment</h1>
                </Link>
                <Link href={'/questions'}>
                    <h1 className="my-3 w-60">General Enquiries</h1>
                </Link>
                <Link href={'/contact'}>
                    <h1 className="my-3 w-60">Contact</h1>
                </Link>
            </div>
            <Image height={60} width={150} src="https://res.cloudinary.com/dcpqx91e5/image/upload/v1711391395/herhq/icons/x3jv9fypjuoyqmluirfk.jpg" alt="secure" className="w-96 p-1" />
            <footer className="text-gray-800 p-4 text-center text-sm">
                <p>© 2024 Herhq. Build For YOU.</p>
            </footer>
        </div>
    )
}