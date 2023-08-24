import Link from "next/link";

export default function Header() {
    return(
        <header className="bg-blue-700 w-full h-12 flex items-center justify-around">
            <h1 className="text-white font-bold">Logo</h1>

            <nav>
                <ul className="flex gap-2 h-full">
                    <li className="hover:underline underline-offset-4">
                        <Link href="/" className="w-full h-full text-white font-extralight">Home</Link>
                    </li>
                    <li className="hover:underline underline-offset-4">
                        <Link href="/pages/Noticias" className="w-full h-full text-white font-extralight">Notícias</Link>
                    </li>
                    <li className="hover:underline underline-offset-4">
                        <Link href="/pages/Sobre" className="w-full h-full text-white font-extralight">Sobre</Link>
                    </li>
                    <li className="hover:underline underline-offset-4">
                        <Link href="/pages/Suporte" className="w-full h-full text-white font-extralight">Suporte</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}