import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div>
            <AppHeader />
            <TabletHeader />
            <DesktopHeader />
            <div className="flex items-center justify-around py-2">
                <div></div>
                <Link href={'/'}>
                    <Image priority height={80} width={80} src="/icons/logo.png" alt="Logo" className="h-16 w-24" />
                </Link>
                <Link href={'/liked'}>
                    <Image height={80} width={80} src="/icons/heart.png" alt="Liked" className="h-6 w-6" />
                </Link>
            </div>
        </div>
    )
}

function TabletHeader() {}

function DesktopHeader() {
    return (
        <header className="hidden md:block p-3 z-40 bg-white fixed top-0 w-screen">
            <div className="flex items-center justify-around py-2">
                <div>
                    <Link href={'/'}>
                        <Image priority height={40} width={80} src="/icons/logo.png" alt="Logo" className="h-16 w-24" />
                    </Link>
                </div>
                <div className="flex items-center font-mono justify-around lg:gap-6 gap-4 text-md">
                    <Link href={'/'}>
                        <p>HOME</p>
                    </Link>
                    <Link href={'/buy'}>
                        <p>SHOP</p>
                    </Link>
                    <Link href={'/questions'}>
                        <p>FAQ</p>
                    </Link>
                    <Link href={'/sizeChart'}>
                        <p>FIT GUIDE</p>
                    </Link>
                </div>
                <div className="flex justify-around gap-6">
                    <Link href={'/cart'}>
                        <Image height={20} width={20} src="/icons/cart.png" alt="Cart" className="h-6 w-6" />
                    </Link>
                    <Link href={'/liked'}>
                        <Image height={20} width={20} src="/icons/heart.png" alt="Liked" className="h-6 w-6" />
                    </Link>
                    <Link href={'/user'}>
                        <Image height={20} width={20} src="/icons/user.png" alt="Account" className="h-7 w-7" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

function AppHeader() {
    return (
        <header className="border-t-4 block xs:hidden z-40 border-gray-300 bg-white fixed bottom-0 w-screen">
            <div className="flex text-xs items-center justify-around">
                <Link href={'/'}>
                    <div className="p-2">
                        <Image priority height={20} width={20} src="/icons/bikini.png" alt="Logo" className="h-8 w-8" />
                        <h1>HerHQ</h1>
                    </div>
                </Link>
                <Link href={'/liked'}>
                    <div className="p-2">
                        <Image height={20} width={20} src="/icons/heart.png" alt="Heart" className="h-8 w-8" />
                        <h1>Loved</h1>
                    </div>
                </Link>
                <Link href={'/buy'}>
                    <div className="p-2">
                        <Image height={20} width={20} src="/icons/deals.png" alt="Deals" className="h-8 w-8" />
                        <h1>Shop</h1>
                    </div>
                </Link>
                <Link href={'/cart'}>
                    <div className="p-2">
                        <Image height={20} width={20} src="/icons/cart.png" alt="Cart" className="h-8 w-8" />
                        <h1>Cart</h1>
                    </div>
                </Link>
                <Link href={'/user'}>
                    <div className="p-2">
                        <Image height={20} width={20} src="/icons/user.png" alt="Account" className="h-8 w-8" />
                        <h1>User</h1>
                    </div>
                </Link>
            </div>
        </header>
    )
}