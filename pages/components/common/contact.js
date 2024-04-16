import Image from "next/image";
import Link from "next/link";

export default function Contact(){
    return (
        <div className="fixed right-4 md:right-10 rounded-full bg-white p-2 border border-pink-400 xs:bottom-10 bottom-28 z-30">
            <Link href={'/contact'}>
                <Image height={40} width={40} src="/icons/mail.png" alt="contact" className="w-10 h-10"/>
            </Link>
        </div>
    )
}