import { BsSearch, BsFillCartFill } from "react-icons/bs";
export default function Navbar() {
    return <nav className="w-full h-[6rem] bg-gradient-to-r from-purple to-pink px-8 flex items-center justify-between">
        <div className="w-[3rem] h-[3rem] rounded-[50%] border-4 border-[white] bg-pink"></div>
        <form className="rounded-md bg-[white] overflow-hidden">
            <input type="search" name="search" className="w-[10rem] md:w-[50vw] md:h-10 focus:outline-none px-4 leading-8" placeholder="search..." />
            <button className="w-[2.5rem]" type="button">
                <BsSearch className="text-purple" />
            </button>
        </form>
        <div className="text-[white] flex gap-6 items-center">
            <p className="cursor-pointer px-2 py-1 border-2 border-[white] rounded-md hover:bg-purple hover:border-purple shadow-lg">Login</p>
            <p className="cursor-pointer"><BsFillCartFill className="text-[white] text-2xl hover:text-purple shadow-lg" /></p>
        </div>
    </nav>
}