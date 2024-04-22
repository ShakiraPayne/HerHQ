import Contact from "./components/common/contact";
import Header from "./components/common/header";
import Varities from './components/home/varities'
import Footer from "./components/common/footer";
import Ambassador from './components/home/ambassador'

export default function Home() {

  return (
    <div className={`portslat h-screen relative pb-16 bg-white`}>
      <Contact />
      <Header />
      <div className="flex items-center md:pb-12 justify-center min-h-2/3 video-container">
          <video
            className='block top-0 md:hidden z-50'
            onContextMenu={e => e.preventDefault()}
            autoPlay
            loop
            muted
            preload='auto'
            playsInline
            controls={false}
          >
            <source src="https://res.cloudinary.com/dcpqx91e5/video/upload/v1711391165/herhq/video/p7nxxpiwas4thslg1mju_1.mp4" type="video/mp4" />
          </video>
          <video
            className='hidden md:block z-20'
            onContextMenu={e => e.preventDefault()}
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            controls={false}
          >
            <source src="https://res.cloudinary.com/dcpqx91e5/video/upload/v1711391162/herhq/video/vzswpwjeoutvhl66ntvj_2.mp4" type='video/mp4' />
          </video>
        </div>
      <Varities />
      <Ambassador />
      <Footer />
      <div className="h-16 xs:h-0"></div>
    </div>
  );
}