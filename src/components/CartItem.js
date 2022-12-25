import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function CartItem({setTotalItem}) {
    const [item, setItem] = useState(1)
    const [show, setShow] = useState(true);
    
    function handleIncrement(){
        setItem(item+1);
        setTotalItem(pre=>pre+1);
    }
    function handleDecrement(){
        if(item>0)
        {
            setItem(item-1)
            setTotalItem(pre=>pre-1);
        }
    }
    function handleAdd(e){
        e.target.disabled = true;
        
        setTotalItem(pre=>pre+item)
    }
    function handleRemove(){
        setTotalItem(pre=>pre-item)
        setShow(false)
    }
    
    return (show?<div className="flex gap-4 items-center py-8 border-b-2">
        <div className="w-[10rem]">
            <img className="w-full" src="/assets/products/product-1/image-product-1.jpg" alt="product-1" />
        </div>
        <div className="flex items-center gap-x-12">
            <div className="w-[50%]">
                <p className="text-[1.2rem] font-semibold text-purple">SNEAKER COMPANY</p>
                <p className="font-extrabold">Fall Limited edition sneakers</p>
                <p className="text-[grey] text-[0.9rem]">These-low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather offers.</p>
                <div className="flex gap-8 mt-4">
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none disabled:bg-light-purple" type="button" onClick={(e)=>handleAdd(e)}>Add</button>
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none" type="button" onClick={handleRemove}>Remove</button>
                </div>
            </div>
            <div>
                <div className="flex gap-x-8 items-center">
                    <p className="text-[1.1rem] font-semibold">$ 125.00</p>
                    <p className="py-2 px-4 bg-light-purple text-purple font-semibold rounded-md">50%</p>
                </div>
                <p className="text-[grey] line-through">$ 250.00</p>
            </div>
        </div>
        <div className="flex flex-col w-[2rem] items-center gap-y-8">
            <BsChevronUp className="cursor-pointer" onClick={handleIncrement}/>
            <div className="text-2xl">{item}</div>
            <BsChevronDown className="cursor-pointer" onClick={handleDecrement}/>
        </div>
    </div>:null)

}