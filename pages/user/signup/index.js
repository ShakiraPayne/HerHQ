import Header from "../../components/common/header";
import Contact from "../../components/common/contact";
import Link from "next/link";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function User() {
    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <SignUp />
            <div className="h-16 md:h-0"></div>
        </div>
    )
}

function SignUp() {
    const router = useRouter();
    const emailRef = useRef();
    const telephoneRef = useRef();
    const addressRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const termsRef = useRef();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            router.push('/user');
        }
    }, );

    const handleSubmit = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const terms = termsRef.current.checked;
        const telephone = telephoneRef.current.value;
        const address = addressRef.current.value;
        if (name && email && password && confirmPassword && terms) {
            if (password === confirmPassword) {
                const notify = toast.loading('Creating account...');
                fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        telephone,
                        address
                    })})
                .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            const user = data.user;
                            toast.success(data.message, { id: notify });
                            localStorage.setItem('token', data.token);
                            localStorage.setItem('user', JSON.stringify(data.user));
                            localStorage.setItem('name', user.name);
                            router.push('/user');
                        }
                        else {
                            toast.error(data.message, { id: notify });
                        }
                    })
            }
            else {
                toast.error('Password and confirm password should be same');
            }
        }
        else {
            toast.error('All fields are required');
        }
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md md:max-w-xl xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-0 md:gap-6 md:grid grid-cols-2 place-content-center" action="#">
                            <div className="min-w-60">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                <input ref={nameRef} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your Name" />
                            </div>
                            <div className="min-w-60">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@herhq.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                                <input ref={confirmPasswordRef} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                                <input ref={telephoneRef} type="text" name="confirm-password" id="confirm-password" placeholder="99999999999" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                <textarea ref={addressRef} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input ref={termsRef} id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500">I accept the <span className="font-medium text-primary-600 hover:underline"><Link href={"/policies"}>Terms and Conditions</Link></span></label>
                                </div>
                            </div>
                            <div onClick={handleSubmit} className="w-full text-white bg-gray-600 hover:bg-primary-700 rounded-lg text-sm px-5 py-2.5 cursor-pointer text-center">Create an account</div>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <span className="font-medium text-primary-600 hover:underline"><Link href="/user">Login here</Link></span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}