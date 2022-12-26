import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function CartItem({setTotalItem, data, setTotalPrice}) {
    const [item, setItem] = useState(1)
    const [show, setShow] = useState(true);
    
    function handleIncrement(){
        setItem(item+1);
    }
    function handleDecrement(){
        if(item>0)
        {
            setItem(item-1)
        }
    }
    function handleAdd(e){
        e.target.disabled = true;
        
        setTotalItem(pre=>pre+item)
        setTotalPrice(pre=>pre+item*data.price)
    }
    function handleRemove(){
        setTotalItem(pre=>pre-item)
        setTotalPrice(pre=>pre-item*data.price)
        setShow(false)
    }
    
    return (show?<div className="flex gap-4 items-center py-8 border-b-2">
        <div className="w-[10rem]">
            <img className="w-full" src={data.thumbnail} alt="product-1" />
        </div>
        <div className="flex items-center gap-x-12">
            <div className="w-[50%]">
                <p className="text-[1.2rem] font-semibold text-purple">{data.brand}</p>
                <p className="font-extrabold">{data.name}</p>
                <p className="text-[grey] text-[0.9rem]">{data.description.substr(0,200)}...</p>
                <div className="flex gap-8 mt-4">
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none disabled:bg-light-purple" type="button" onClick={(e)=>handleAdd(e)}>Add</button>
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none" type="button" onClick={handleRemove}>Remove</button>
                </div>
            </div>
            <div>
                <div className="flex gap-x-8 items-center">
                    <p className="text-[1.1rem] font-semibold">$ {data.price}</p>
                    <p className="py-2 px-4 bg-light-purple text-purple font-semibold rounded-md">{data.discount} off</p>
                </div>
                <p className="text-[grey] line-through">$ {data.originalPrice}</p>
            </div>
        </div>
        <div className="flex flex-col w-[2rem] items-center gap-y-8">
            <BsChevronUp className="cursor-pointer" onClick={handleIncrement}/>
            <div className="text-2xl">{item}</div>
            <BsChevronDown className="cursor-pointer" onClick={handleDecrement}/>
        </div>
    </div>:null)

}