import Image from "next/image"
import Navbar from "../Navbar/Navbar"
import Hero from '/public/hero.jpg'

const Header = () => {
    return (
        <div className="w-full">
            <Navbar />
            <div className="h-60 bg-[url('/hero.jpg')] bg-center bg-cover" />
        </div>
    )
}

export default Header