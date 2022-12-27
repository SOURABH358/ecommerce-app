import { useState } from "react";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { GetAuthContext } from "../Reducer/AuthContext";
import { Link } from "react-router-dom";
import { products } from "../utils/data"
import { GetProdContext } from "../Reducer/productContext";
export default function Navbar() {
    const [menu, showMenu] = useState(false)
    const [query, setQuery] = useState(null)
    const currentUser = GetAuthContext();
    const {setCurrentProd} = GetProdContext();
    // const [menu, showMenu] = useState(false)
    console.log(query)
    async function handleLogin() {
        await signInWithPopup(auth, provider)
            .then(async (result) => {
                try {
                    await setDoc(doc(db, "Users", result.user.uid), {
                        uid: result.user.uid,
                        name: result.user.displayName,
                        email: result.user.email,
                        Address: [],
                        Cart: [],
                    });
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })
    }

    async function handleLogOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
        });
    }
    function handleChange(e) {
        if (e.code == 'Backspace') {
            setQuery(null)
        }
        else if (e.code == 'Enter') {
            let regex = new RegExp(e.target.value, 'i');
            setQuery(products.filter(item => item.name.match(regex)))
            console.log(e.target.value)
        }
    }
    function handleSubmit(e){
        e.preventDefault();
    }

    return <nav className="w-full h-[6rem] bg-gradient-to-r from-purple to-pink px-8 flex items-center justify-between">
        <p className="text-[white] text-[1.5rem] cursor-pointer"><Link to="/">Shopzy</Link></p>
        <form className="rounded-md bg-[white] relative" onSubmit={(e)=>handleSubmit(e)}>
            <input type="search" name="search" className="w-[10rem] md:w-[50vw] rounded-md capitalize md:h-10 focus:outline-none px-4 leading-8"
                placeholder="search..." onKeyDown={(e) => handleChange(e)} />
            <button className="w-[2.5rem]" type="button">
                <BsSearch className="text-purple" />
            </button>
            {query ? <div className=" absolute top-[3rem] left-0 w-full py-[1rem] bg-[white] shadow-lg z-20">
                {query.map(item => {
                    return <div className="py-[1rem] px-[1rem] text-[black] cursor-pointer" onClick={()=>setCurrentProd(item.id)}><Link to={`products/${item.id}`}>{item.name}</Link></div>
                })}
            </div> : null}
        </form>
        <div className="hidden md:flex text-[white] gap-6 items-center">
            {currentUser ? null : <p className="md:block cursor-pointer px-2 py-1 border-2 border-[white] 
            rounded-md hover:bg-purple hover:border-purple shadow-lg" onClick={handleLogin}>Login
            </p>}
            <div className="cursor-pointer relative">
                <Link to="/cart">
                    <BsFillCartFill className="text-[white] text-2xl hover:text-purple shadow-lg" />
                </Link>
                <p className="absolute -top-4 -left-2 px-2 py-2 bg-purple text-[white] rounded-[50%] text-[0.9rem]"></p>
            </div>
            <div className="text-[white] flex gap-x-2 items-center">
                <p className="hidden md:block">{currentUser ? currentUser.displayName : ""}</p>
                <div className="w-[3rem] h-[3rem] rounded-[50%] overflow-hidden hover:border-4 hover:border-[white] bg-purple"
                    onClick={() => showMenu(true)}>
                    <img src="/assets/default.jpg" className="w-full" alt="user" />
                </div>
            </div>
        </div>
        <div className="md:hidden flex gap-6 items-center">
            {/* <p className="md:block cursor-pointer px-2 py-1 border-2 border-[white] text-[white] rounded-md hover:bg-purple hover:border-purple shadow-lg">Login</p> */}

            <div className="w-[3rem] h-[3rem] rounded-[50%] hover:border-4 overflow-hidde hover:border-[white] bg-purple"
                onClick={() => showMenu(true)}>
                <img src="/assets/default.jpg" alt="user" className="w-full" />
            </div>
        </div>
        {menu ? <div className="fixed top-0 md:top-[6rem] md:shadow-xl md:rounded-lg right-0  md:w-fit w-[70%] md:h-fit h-full bg-[white] z-10 px-[2rem] py-[2rem]">
            <div className="flex gap-6 items-center border-b-2 py-2">
                <div className="w-[3rem] h-[3rem] rounded-[50%] overflow-hidden bg-pink">
                    <img src="/assets/default.jpg" alt="user" className="w-full" />
                </div>
                <p className="text-[1.25rem]">{currentUser ? currentUser.displayName : ""}</p>
            </div>
            <p className="py-4 cursor-pointer"><Link to="/cart">Cart</Link></p>
            <p className="py-4 cursor-pointer">Orders</p>
            <p className="py-4 cursor-pointer">Shipping Address</p>
            <p className="py-4 cursor-pointer" onClick={handleLogOut}>Log Out</p>
            <p className="py-4 cursor-pointer">About</p>
            <p className="py-4 cursor-pointer">Contact</p>
            <p className="py-4 cursor-pointer" onClick={() => showMenu(false)}>Close</p>
        </div> : null}
    </nav>
}