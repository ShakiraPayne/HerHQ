import Image from "next/image"

export default function CardOne(){
    return (
        <div className="relative hidden">
            <h1 className="nerkoone m-3 p-3 font-extrabold">Beauty Lies Inside :</h1>
            <div className="m-4 md:w-1/2 rounded-xl border border-2 border-black flex mb-10 overflow-hidden">
                <Image height={40} width={40} src="/product/extra4.jpg" alt="Beauty" className="h-40 xs:h-44" />
                <div className="flex items-center justify-center">
                    <h2 className="font-bold mx-4">Other beauty attracts.<br/> But inner beauty captivates.</h2>
                </div>
            </div>
            <div className="">
                <div className="greatvibes p-2 flex flex-wrap justify-start items-center gap-2">
                    <h1 className="font-bold text-xl vibes">Hashtags:</h1>
                    <div className="p-2 rounded-full border border-2 w-fit px-4 border-gray-800 items-center flex gap-1 text-gray-800 bg-gray-100"><span className="font-bold text-xl"># </span>Sexy<span><Image height={40} width={40} src="/icons/cross.png" alt="X" className="w-4 h-4"/></span></div>
                    <div className="p-2 rounded-full border border-2 w-fit px-4 border-gray-800 items-center flex gap-1 text-gray-800 bg-gray-100"><span className="font-bold text-xl"># </span>Girls<span><Image height={40} width={40} src="/icons/cross.png" alt="X" className="w-4 h-4"/></span></div>
                    <div className="p-2 rounded-full border border-2 w-fit px-4 border-gray-800 items-center flex gap-1 text-gray-800 bg-gray-100"><span className="font-bold text-xl"># </span>Style<span><Image height={40} width={40} src="/icons/cross.png" alt="X" className="w-4 h-4"/></span></div>
                    <div className="p-2 rounded-full border border-2 w-fit px-4 border-gray-800 items-center flex gap-1 text-gray-800 bg-gray-100"><span className="font-bold text-xl"># </span>lingerie<span><Image height={40} width={40} src="/icons/cross.png" alt="X" className="w-4 h-4"/></span></div>
                    <div className="p-2 rounded-full border border-2 w-fit px-4 border-gray-800 items-center flex gap-1 text-gray-800 bg-gray-100"><span className="font-bold text-xl"># </span>Style<span><Image height={40} width={40} src="/icons/cross.png" alt="X" className="w-4 h-4"/></span></div>
                </div>
                <Image height={40} width={40} src="/product/extra2.jpg" alt="Beauty" className="md:w-1/2" />
            </div>
            <div className="m-4 md:w-1/2 my-8 rounded-xl border border-2 border-black flex overflow-hidden">
                <Image height={40} width={40} src="/product/extra5.jpg" alt="Beauty" className="xs:h-44 h-40" />
                <div className="flex items-center justify-center w-full">
                    <h2 className="text-center font-bold mx-4">Be Your Own<br/> kind of beautiful.</h2>
                </div>
            </div>
        </div>
    )
}