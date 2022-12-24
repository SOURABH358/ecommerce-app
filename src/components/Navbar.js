import { useState } from "react";
import { BsSearch, BsFillCartFill, BsXLg } from "react-icons/bs";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase/Firebase";
export default function Navbar() {
    const [menu, showMenu] = useState(false)
    // const [menu, showMenu] = useState(false)
    function handleLogin(){
        signInWithRedirect(auth, provider)
    }
    return <nav className="w-full h-[6rem] bg-gradient-to-r from-purple to-pink px-8 flex items-center justify-between">
        <p className="text-[white] text-[1.5rem]">Shopzy</p>
        <form className="rounded-md bg-[white] overflow-hidden">
            <input type="search" name="search" className="w-[10rem] md:w-[50vw] md:h-10 focus:outline-none px-4 leading-8" placeholder="search..." />
            <button className="w-[2.5rem]" type="button">
                <BsSearch className="text-purple" />
            </button>
        </form>
        <div className="hidden md:flex text-[white] gap-6 items-center">
            <p className="md:block cursor-pointer px-2 py-1 border-2 border-[white] rounded-md hover:bg-purple hover:border-purple shadow-lg" onClick={handleLogin}>Login</p>
            <p className="cursor-pointer"><BsFillCartFill className="text-[white] text-2xl hover:text-purple shadow-lg" /></p>
            <div className="w-[3rem] h-[3rem] rounded-[50%] hover:border-4 hover:border-[white] bg-purple"></div>
        </div>
        <div className="md:hidden flex gap-6 items-center">
            {/* <p className="md:block cursor-pointer px-2 py-1 border-2 border-[white] text-[white] rounded-md hover:bg-purple hover:border-purple shadow-lg">Login</p> */}

            <div className="w-[3rem] h-[3rem] rounded-[50%] hover:border-4 hover:border-[white] bg-purple" onClick={() => showMenu(true)}></div>
        </div>
        {menu?<div className="fixed top-0 right-0 w-[70%] md:hh-full bg-[white] z-10 px-[2rem] py-[2rem]">
            <div className="flex gap-6 items-center border-b-2 py-2">
                <div className="w-[3rem] h-[3rem] rounded-[50%] bg-pink"></div>
                <p className="text-[1.25rem]">Jonas</p>
            </div>
            <p className="py-4">Cart</p>
            <p className="py-4">Log Out</p>
            <p className="py-4">About</p>
            <p className="py-4">Contact</p>
            <p className="py-4 cursor-pointer" onClick={()=>showMenu(false)}>Close</p>
        </div>:null}
    </nav>
}