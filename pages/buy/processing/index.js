import Contact from "/pages/components/common/contact";
import Header from "/pages/components/common/header";
import Footer from "/pages/components/common/footer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Processing() {
    const router = useRouter();
    const cart = router.query.cart;
    const { removeCart } = useContext(MyContext);

    useEffect(()=>{
        if(cart){
            if(cart === 'true'){
                removeCart();
            }
        }
    })

    return (
        <div className={`portslat min-h-screen h-full relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="w-full my-4">
                <div className="w-full flex items-center justify-center">
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                        <path fill="none" stroke="none" d="M289.000000,513.000000 
    C192.690048,513.000000 96.880096,513.000000 1.035069,513.000000 
    C1.035069,342.398346 1.035069,171.796707 1.035069,1.097524 
    C171.559967,1.097524 342.120026,1.097524 512.840027,1.097524 
    C512.840027,171.666550 512.840027,342.333252 512.840027,513.000000 
    C438.463348,513.000000 363.981659,513.000000 289.000000,513.000000 
    M357.165344,195.474503 
    C357.660431,194.621429 358.059265,193.692200 358.664978,192.926666 
    C367.771851,181.416779 376.697662,169.755081 386.083679,158.476669 
    C399.393768,142.482971 413.002319,126.736366 426.579498,110.966995 
    C431.224823,105.571640 436.023743,100.292908 440.994537,95.197014 
    C448.400543,87.604645 455.974243,80.173538 463.565765,72.765205 
    C469.429138,67.043358 475.429443,61.461849 481.842316,55.368057 
    C480.483459,55.177578 479.876556,55.018734 479.269531,55.018181 
    C463.272369,55.003613 447.274414,54.932217 431.278992,55.097843 
    C429.298859,55.118343 427.042023,56.010445 425.405029,57.184265 
    C412.811584,66.214355 399.894867,74.871628 387.931213,84.684273 
    C368.649353,100.499382 349.988464,117.073685 331.136078,133.409012 
    C325.628204,138.181534 320.360748,143.231583 314.339935,147.864426 
    C311.019806,145.536926 307.719940,143.179901 304.376343,140.886642 
    C278.766205,123.321541 250.296280,113.507797 219.493713,111.194824 
    C204.079025,110.037338 188.551010,110.778908 173.201645,113.913696 
    C151.392075,118.367859 130.992798,126.094307 112.282356,138.206985 
    C96.066704,148.704590 81.868027,161.309113 69.791153,176.511581 
    C59.161358,189.892426 50.906296,204.507858 44.438034,220.179825 
    C36.672989,238.993744 32.705769,258.710266 32.089191,279.023102 
    C31.864405,286.428589 32.351357,293.896454 33.084553,301.279144 
    C33.872490,309.213013 34.882416,317.178619 36.586826,324.956970 
    C40.641567,343.461456 48.185379,360.617859 57.974468,376.793060 
    C68.180107,393.656555 81.013458,408.346161 96.343285,420.624786 
    C108.880150,430.666290 122.623558,438.853821 137.486847,445.309814 
    C154.958969,452.898926 173.192734,457.221527 191.954391,458.767151 
    C203.270981,459.699432 214.791779,458.597198 226.193451,457.936829 
    C239.554367,457.162994 252.298370,453.518860 264.918854,449.114899 
    C296.265442,438.176300 322.011017,419.441223 342.680664,393.705139 
    C353.369049,380.396912 362.728790,366.109650 367.969391,349.681946 
    C372.037781,336.928955 375.958008,324.060455 378.729065,310.985779 
    C380.586060,302.223938 380.778107,293.015350 380.853180,283.999481 
    C380.912903,276.827423 380.296082,269.516327 378.864471,262.494293 
    C376.251495,249.677673 373.512787,236.802933 369.494751,224.383301 
    C366.339752,214.631302 361.178070,205.528549 357.165344,195.474503 
    z"/>
                        <path fill="#B0EF8F" opacity="1.000000" stroke="none" d="M356.907806,196.137375 
    C361.178070,205.528549 366.339752,214.631302 369.494751,224.383301 
    C373.512787,236.802933 376.251495,249.677673 378.864471,262.494293 
    C380.296082,269.516327 380.912903,276.827423 380.853180,283.999481 
    C380.778107,293.015350 380.586060,302.223938 378.729065,310.985779 
    C375.958008,324.060455 372.037781,336.928955 367.969391,349.681946 
    C362.728790,366.109650 353.369049,380.396912 342.680664,393.705139 
    C322.011017,419.441223 296.265442,438.176300 264.918854,449.114899 
    C252.298370,453.518860 239.554367,457.162994 226.193451,457.936829 
    C214.791779,458.597198 203.270981,459.699432 191.954391,458.767151 
    C173.192734,457.221527 154.958969,452.898926 137.486847,445.309814 
    C122.623558,438.853821 108.880150,430.666290 96.343285,420.624786 
    C81.013458,408.346161 68.180107,393.656555 57.974468,376.793060 
    C48.185379,360.617859 40.641567,343.461456 36.586826,324.956970 
    C34.882416,317.178619 33.872490,309.213013 33.084553,301.279144 
    C32.351357,293.896454 31.864405,286.428589 32.089191,279.023102 
    C32.705769,258.710266 36.672989,238.993744 44.438034,220.179825 
    C50.906296,204.507858 59.161358,189.892426 69.791153,176.511581 
    C81.868027,161.309113 96.066704,148.704590 112.282356,138.206985 
    C130.992798,126.094307 151.392075,118.367859 173.201645,113.913696 
    C188.551010,110.778908 204.079025,110.037338 219.493713,111.194824 
    C250.296280,113.507797 278.766205,123.321541 304.376343,140.886642 
    C307.719940,143.179901 311.019806,145.536926 314.635712,148.346542 
    C313.652405,150.327042 312.473785,151.926712 311.079559,153.308960 
    C276.249084,187.840500 243.898636,224.568497 213.663269,263.173737 
    C211.736130,265.634369 209.740143,268.041077 207.607468,270.681793 
    C175.346863,248.169159 143.430084,225.896439 111.586418,203.674759 
    C101.452805,214.113525 91.638542,224.223312 81.595963,234.568298 
    C124.805161,294.509949 168.922531,354.920135 208.393127,419.046570 
    C209.854095,416.564117 210.950195,414.704468 212.043686,412.843292 
    C255.017120,339.700317 301.366272,268.785278 352.102264,200.770706 
    C353.415161,199.010712 355.293304,197.672379 356.907806,196.137375 
    z"/>
                        <path fill="#009045" opacity="1.000000" stroke="none" d="M357.036560,195.805939 
    C355.293304,197.672379 353.415161,199.010712 352.102264,200.770706 
    C301.366272,268.785278 255.017120,339.700317 212.043686,412.843292 
    C210.950195,414.704468 209.854095,416.564117 208.393127,419.046570 
    C168.922531,354.920135 124.805161,294.509949 81.595963,234.568298 
    C91.638542,224.223312 101.452805,214.113525 111.586418,203.674759 
    C143.430084,225.896439 175.346863,248.169159 207.607468,270.681793 
    C209.740143,268.041077 211.736130,265.634369 213.663269,263.173737 
    C243.898636,224.568497 276.249084,187.840500 311.079559,153.308960 
    C312.473785,151.926712 313.652405,150.327042 314.957275,148.491547 
    C320.360748,143.231583 325.628204,138.181534 331.136078,133.409012 
    C349.988464,117.073685 368.649353,100.499382 387.931213,84.684273 
    C399.894867,74.871628 412.811584,66.214355 425.405029,57.184265 
    C427.042023,56.010445 429.298859,55.118343 431.278992,55.097843 
    C447.274414,54.932217 463.272369,55.003613 479.269531,55.018181 
    C479.876556,55.018734 480.483459,55.177578 481.842316,55.368057 
    C475.429443,61.461849 469.429138,67.043358 463.565765,72.765205 
    C455.974243,80.173538 448.400543,87.604645 440.994537,95.197014 
    C436.023743,100.292908 431.224823,105.571640 426.579498,110.966995 
    C413.002319,126.736366 399.393768,142.482971 386.083679,158.476669 
    C376.697662,169.755081 367.771851,181.416779 358.664978,192.926666 
    C358.059265,193.692200 357.660431,194.621429 357.036560,195.805939 
    z"/>
                    </svg>
                </div>
                <div className="w-full text-center px-2 text-3xl font-bold text-green-600">Your order is being processed and soon will be visible in orders.</div>
                <div className="w-full text-center px-2 text-lg text-gray-600">We will notify you once your order is verified and ready.</div>
                <div className="w-full text-center px-2 text-lg text-gray-600">Thank you for shopping with us</div>
                <div className="w-full text-center px-2 text-lg text-gray-600">You can check <span className="font-bold">orders in settings</span>, and status on <span className="font-bold">tracking shipments.</span></div>
            </div>
            <Footer />
            <div className="md:h-0 h-16"></div>
        </div>
    )
}