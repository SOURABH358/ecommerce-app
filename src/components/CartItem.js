import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function CartItem() {
    return (<div className="flex gap-4 items-center py-4 border-b-2">
        <div className="w-[10rem]">
            <img className="w-full" src="/assets/products/product-1/image-product-1.jpg" alt="product-1" />
        </div>
        <div className="flex items-center gap-x-12">
            <div className="w-[50%]">
                <p className="text-[1.2rem] font-semibold text-purple">SNEAKER COMPANY</p>
                <p className="font-extrabold">Fall Limited edition sneakers</p>
                <p className="text-[grey] text-[0.9rem]">These-low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather offers.</p>
                <div className="flex gap-8 mt-4">
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none" type="button">Add</button>
                    <button className="w-[5rem] h-[2rem] bg-purple text-[white] rounded-md border-none" type="button">Remove</button>
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
            <BsChevronUp className="cursor-pointer" />
            <div className="text-2xl">0</div>
            <BsChevronDown className="cursor-pointer" />
        </div>
    </div>)

}