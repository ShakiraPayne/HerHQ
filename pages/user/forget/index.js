import Header from "../../components/common/header";
import Contact from "../../components/common/contact";
import SignUp from '../../components/user/signup'

export default function User() {
    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <SignUp/>
            <div className="h-16 md:h-0"></div>
        </div>
    )
}