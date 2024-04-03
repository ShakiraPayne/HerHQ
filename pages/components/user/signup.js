import { useRef, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const otpRef = useRef();
    const [otpSent, setOtpSent] = useState(false);
    const [hashOtp, setHashOtp] = useState('');

    const handleClick = () => {
        const notify = toast.loading("Changing Password");
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const otp = otpRef.current.value;
        if(password !== confirmPassword){
            toast.error("Password does not match", { id: notify });
            return;
        }
        else{
            fetch('/api/change_password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, otp, hashOtp })
            })        
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast.success("Password changed successfully", { id: notify });
                    emailRef.current.disabled = false;
                    setOtpSent(false);
                }
                else{
                    toast.error("Failed to change password", { id: notify });
                }
            })
            .catch(() => {
                toast.error("Failed to change password", { id: notify });
            })
        }
    }

    const sendOTP = () => {
        const notify = toast.loading("Sending OTP");
        const email = emailRef.current.value;

        fetch('/api/verify_mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                setHashOtp(data.hashOtp);
                toast.success("OTP sent successfully", { id: notify });
                emailRef.current.disabled = true;
                setOtpSent(true);
            }
            else {
                toast.error("Failed to send OTP", { id: notify });
            }
        }).catch(() => {
            toast.error("Failed to send OTP", { id: notify });
        })
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Change Password
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@herhq.com" required="" />
                            </div>
                            {
                                !otpSent && <div>
                                    <p className='m-1 text-xs text-center'>OTP will be send to your email id.</p>
                                    <div onClick={sendOTP} className="w-full text-white bg-gray-600 cursor-pointer hover:bg-primary-700 rounded-lg text-sm px-5 py-2.5 text-center">SEND OTP</div>
                                </div>
                            }
                            {
                                otpSent && <div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input ref={passwordRef} type="password" name="email" id="emaisl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="**********" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                        <input ref={confirmPasswordRef} type="password" name="email" id="emaisl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="**********" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Enter OTP</label>
                                        <input ref={otpRef} type="text" name="email" id="emaisl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="**********" required="" />
                                    </div>
                                    <div onClick={handleClick} className="w-full text-white bg-gray-600 hover:bg-primary-700 mt-4 cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center">Change Password</div>
                                </div>
                            }
                            <p className="text-sm font-light text-gray-500">
                                Remind your account? <Link href="/user" className="font-medium text-primary-600 hover:underline">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}