import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp,BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { db } from "../firebase/Firebase";
import { GetAuthContext } from "../Reducer/AuthContext";

export default function CartItem({ setTotalItem, data, setTotalPrice }) {
    const [item, setItem] = useState(1)
    const [show, setShow] = useState(true);
    const currentUser = GetAuthContext();

    function handleIncrement() {
        setItem(item + 1);
    }
    function handleDecrement() {
        if (item > 0) {
            setItem(item - 1)
        }
    }
    function handleAdd(e) {
        e.target.disabled = true;

        setTotalItem(pre => pre + item)
        setTotalPrice(pre => pre + item * data.price)
    }
    async function handleRemove() {
        setTotalItem(pre => pre === 0 ? 0 : pre - item)
        setTotalPrice(pre => pre === 0 ? 0 : pre - item * data.price)
        setShow(false)
        if (currentUser.uid) {
            await updateDoc(doc(db, "Users", currentUser.uid), {
                Cart: arrayRemove(data)
            });
        }
    }

    return (show ? <div className="flex md:flex-row flex-col gap-4 items-center py-8 border-b-2">
        <div className="md:w-[10rem] w-full">
            <img className="w-full md:w-[10rem]" src={data.thumbnail} alt="product-1" />
        </div>
        <div className="w-full md:w-[70%] flex md:flex-row flex-col md:items-center  gap-12">
            <div className="md:w-[50%] w-full">
                <p className="text-[1.2rem] font-semibold text-purple">{data.brand}</p>
                <p className="font-extrabold">{data.name}</p>
                <p className="text-[grey] text-[0.9rem]">{data.description.length>200?data.description.substr(0, 200):data.description}...</p>
                <div className="flex gap-8 mt-4">
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none disabled:bg-light-purple" type="button" onClick={(e) => handleAdd(e)}>Add</button>
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none" type="button" onClick={handleRemove}>Remove</button>
                </div>
            </div>
            <div>
                <div className="flex gap-x-8 items-center">
                    <p className="text-[1.1rem] font-semibold">$ {data.price}</p>
                    <p className="py-2 px-4 bg-light-purple text-purple font-semibold rounded-md">{data.discount} off</p>
                </div>
                <p className="text-[grey] line-through">$ {data.originalPrice}</p>
                <div className="flex items-center gap-x-2">
                    <p className="text-dark-green">{data.ratings}</p>
                    {data.ratings>0?data.ratings>=1?<BsFillStarFill className="text-dark-green" />:<BsStarHalf className="text-dark-green"/>:<BsStar className="text-dark-green"/>}
                    {data.ratings>1?data.ratings>=2?<BsFillStarFill className="text-dark-green" />:<BsStarHalf className="text-dark-green"/>:<BsStar className="text-dark-green"/>}
                    {data.ratings>2?data.ratings>=3?<BsFillStarFill className="text-dark-green" />:<BsStarHalf className="text-dark-green"/>:<BsStar className="text-dark-green"/>}
                    {data.ratings>3?data.ratings>=4?<BsFillStarFill className="text-dark-green" />:<BsStarHalf className="text-dark-green"/>:<BsStar className="text-dark-green"/>}
                    {data.ratings>4?data.ratings>=5?<BsFillStarFill className="text-dark-green" />:<BsStarHalf className="text-dark-green"/>:<BsStar className="text-dark-green"/>}
                </div>
            </div>
        </div>
        <div className="flex flex-col w-[2rem] items-center gap-y-8">
            <BsChevronUp className="cursor-pointer" onClick={handleIncrement} />
            <div className="text-2xl">{item}</div>
            <BsChevronDown className="cursor-pointer" onClick={handleDecrement} />
        </div>
    </div> : null)

}