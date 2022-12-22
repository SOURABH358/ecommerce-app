import { BsSearch } from "react-icons/bs";
export default function Navbar(){
    return <nav className="w-full h-[5rem] bg-gradient-to-r from-purple to-pink px-8 flex items-center justify-between">
        <div className="w-[3rem] h-[3rem] rounded-[50%] border-4 border-[white] bg-pink"></div>
        <form className="rounded-[1rem] bg-[white] overflow-hidden">
            <input type="search" name="search" className = "w-[50vw] focus:outline-none px-4 leading-8" placeholder="search..."/>
            <button className="w-[3rem]" type="button">
                <BsSearch className="text-purple"/>
            </button>
        </form>
        <div className="text-[white] flex gap-4">
            <p className="cursor-pointer">Login</p>
            <p className="cursor-pointer">🛒</p>
        </div>
    </nav>
}