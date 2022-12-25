import { useState } from "react";
import { BsSearch, BsFillCartFill, BsXLg } from "react-icons/bs";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase/Firebase";
import { GetAuthContext } from "../Reducer/AuthContext";

export default function Navbar() {
    const [menu, showMenu] = useState(false)
    const currentUser = GetAuthContext();
    console.log(currentUser)
    // const [menu, showMenu] = useState(false)
    async function handleLogin(){
        await signInWithPopup(auth, provider)
        .then(async (result)=>{
            try {
                await addDoc(collection(db, "Users"), {
                  name:result.user.displayName,
                  email:result.user.email
                });
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        })
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
            {currentUser?null:<p className="md:block cursor-pointer px-2 py-1 border-2 border-[white] rounded-md hover:bg-purple hover:border-purple shadow-lg" onClick={handleLogin}>Login</p>}
            <p className="cursor-pointer"><BsFillCartFill className="text-[white] text-2xl hover:text-purple shadow-lg" /></p>
            <div className="text-[white] flex gap-x-2 items-center">
                <p className="hidden md:block">{currentUser.displayName}</p>
                <div className="w-[3rem] h-[3rem] rounded-[50%] hover:border-4 hover:border-[white] bg-purple"></div>
            </div>
        </div>
        <div className="md:hidden flex gap-6 items-center">
            {/* <p className="md:block cursor-pointer px-2 py-1 border-2 border-[white] text-[white] rounded-md hover:bg-purple hover:border-purple shadow-lg">Login</p> */}

            <div className="w-[3rem] h-[3rem] rounded-[50%] hover:border-4 hover:border-[white] bg-purple" onClick={() => showMenu(true)}></div>
        </div>
        {menu?<div className="fixed top-0 right-0 w-[70%] md:h-fit h-full bg-[white] z-10 px-[2rem] py-[2rem]">
            <div className="flex gap-6 items-center border-b-2 py-2">
                <div className="w-[3rem] h-[3rem] rounded-[50%] bg-pink"></div>
                <p className="text-[1.25rem]">{currentUser.displayName}</p>
            </div>
            <p className="py-4">Cart</p>
            <p className="py-4">Log Out</p>
            <p className="py-4">About</p>
            <p className="py-4">Contact</p>
            <p className="py-4 cursor-pointer" onClick={()=>showMenu(false)}>Close</p>
        </div>:null}
    </nav>
}