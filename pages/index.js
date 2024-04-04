import Header from "./components/common/header";
import Contact from "./components/common/contact";
import Footer from "./components/common/footer";
import Varities from "./components/home/varities";
import Ambassador from "./components/home/ambassador";

export default function Home(){
  return (
    <div className={`portslat h-screen relative pb-16 bg-white`}>
      <Contact/>
      <Header/>
      <div className="flex items-center justify-center min-h-2/3 video-container">
        <video onPlay={ () => {this.controls = false;} } className="md:hidden block" onContextMenu={e => e.preventDefault()} autoPlay={true} loop muted={true} preload="auto" playsInline controls={false}>
          <source src="https://res.cloudinary.com/dcpqx91e5/video/upload/v1711391165/herhq/video/p7nxxpiwas4thslg1mju_1.mp4" type="video/mp4" />
        </video>
        <video onPlay={ () => {this.controls = false;} } className="hidden md:block w-2/3" onContextMenu={e => e.preventDefault()} autoPlay={true} loop muted={true} playsInline preload="auto" controls={false}>
          <source src="https://res.cloudinary.com/dcpqx91e5/video/upload/v1711391162/herhq/video/vzswpwjeoutvhl66ntvj_2.mp4" type="video/mp4" />
        </video>
      </div>
      <Varities/>
      <Ambassador/>
      <Footer/>
      <div className="h-16 xs:h-0"></div>
    </div>
  )
}