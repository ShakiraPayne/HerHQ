import Header from "../../components/common/header";
import Contact from "../../components/common/contact";
import Link from "next/link";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function User() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(user){
            router.push('/user');
        }
    },)

    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const notify = toast.loading('Logging in...');

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                const { user, token, success, message } = data;
                if (success) {
                    toast.success(message, { id: notify });
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    router.push('/user');
                }
                else{
                    toast.error(message, { id: notify });
                }
            })
            .catch( () => {
                toast.error('An error occurred. Please try again.', { id: notify });
            })
    }

    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                        </div>
                                    </div>
                                    <Link href="/user/forget" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</Link>
                                </div>
                                <div onClick={handleLogin} className="w-full text-white bg-gray-600 hover:bg-primary-700 rounded-lg text-sm px-5 cursor-pointer py-2.5 text-center">Sign in</div>
                                <p className="text-sm font-light text-gray-500">
                                    Do not have an account yet? <Link href="/user/signup" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-16 md:h-0"></div>
        </div>
    )
}