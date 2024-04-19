import Link from "next/link";
import { useRef, useState, useEffect } from "react"
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function Footer() {

    const emailRef = useRef();
    const router = useRouter();
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallBox, setShowInstallBox] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
          event.preventDefault();
          setDeferredPrompt(event);
          const lastPromptTime = localStorage.getItem('lastPromptTime');
          const currentTime = new Date().getTime();
          if (!lastPromptTime || currentTime - parseInt(lastPromptTime) > 7 * 24 * 60 * 60 * 1000) {
            setShowInstallBox(true);
          }
        };
    
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
      }, []);

    const isApple = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iPhone|iPad|iPod/i.test(userAgent);
    }
    
    const handleInstallButtonClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the installation');
                } else {
                    console.log('User dismissed the installation');
                }
                setDeferredPrompt(null);
                setShowInstallBox(false);
                localStorage.setItem('lastPromptTime', new Date().getTime().toString());
            });
        }
    };

    const handleCloseButtonClick = () => {
        setShowInstallBox(false);
        localStorage.setItem('lastPromptTime', new Date().getTime().toString());
    };

    const redirectInstallGuide = () => {
        if(isApple() && !isAppAddedToHomeScreen()){
            router.push("/installGuide");
        } else {
            handleInstallButtonClick();
        }
    }

    const addEmail = async () => {
        const email = emailRef.current.value;
        if (email === "") return;
        const notify = toast.loading("Adding email to our newsletter list");
        let added = false;
        fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })

        setTimeout(()=>{
            toast.success("Requested", {id: notify});
        }, 1500)
        
        emailRef.current.value = "";
    }

    return (
        <div className="bg-gray-100 p-4">
            {showInstallBox && (
                <div className="absolute z-50 top-20 right-4 bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <Image height={40} width={80} src="/icons/logo.png" alt="logo" className="h-12" />
                        <Image height={40} width={40} src={'/icons/cross.png'} onClick={handleCloseButtonClick} alt="close" className="h-6 w-6 bg-gray-100 p-1 rounded-full " />
                    </div>
                    <p className="text-gray-700 text-sm mt-2">Install our app for the best experience!</p>
                    <button onClick={redirectInstallGuide} className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-md">
                        Install Now
                    </button>
                </div>
            )}
            <div className="flex items-center md:justify-around justify-between flex flex-wrap">
                <div className="w-fit">
                    <div className="m-2 rounded-md p-6">
                        <h1 className="font-bold text-lg text-gray-700 py-4">Subscribe to HerHQ.</h1>
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
                        <Image priority height={40} width={80} src="/icons/logo.png" alt="logo" className="h-12" />
                    </div>
                    <h1 className="text-sm">HER HQ PVT LTD // EST-2020</h1>
                    <h1 className="text-sm">@herhq</h1>
                </div>
            </div>

            <div className="text-center text-gray-700 my-10 flex justify-center flex-wrap">
                <Link href={'/ambassador'}>
                    <h1 className="my-3 w-60">Become Our Ambassador</h1>
                </Link>
                <button className="my-3 w-60" onClick={redirectInstallGuide}>
                    Install App
                </button>
                <Link href={'/sizeChart'}>
                    <h1 className="my-3 w-60">Size Chart</h1>
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
            </div>
            <Image height={60} width={150} src="/icons/secure.jpeg" alt="secure" className="w-96 p-1" />
            <footer className="text-gray-800 p-4 text-center text-sm">
                <p>© 2024 Herhq. Build For YOU.</p>
            </footer>
        </div>
    )
}