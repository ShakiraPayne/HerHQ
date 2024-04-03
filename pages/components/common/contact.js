import Image from "next/image";
import Link from "next/link";

export default function Contact(){
    return (
        <div className="fixed right-4 md:right-10 xs:bottom-10 bottom-28 z-30">
            <Link href={'/contact'}>
                <Image height={40} width={40} src="https://res.cloudinary.com/dcpqx91e5/image/upload/v1711391395/herhq/icons/oawgq8fnud5qkandz2sj.png" alt="contact" className="w-16 h-16"/>
            </Link>
        </div>
    )
}