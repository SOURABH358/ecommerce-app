import { useState } from "react";
import CartItem from "./CartItem";
export default function AddtoCart() {
    const [totalItem, setTotalItem] = useState(0);
    return <section className="py-8">
        <div className="w-full flex items-center justify-center">
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
            <div className="w-[10rem] h-2 bg-[grey]"></div>
            <div className="w-4 h-4 rounded-[50%] bg-[grey]"></div>
            <div className="w-[10rem] h-2 bg-[grey]"></div>
            <div className="w-4 h-4 rounded-[50%] bg-[grey]"></div>
        </div>
        <div className="w-full flex items-center justify-center mt-2 gap-16">
            <p className="">Select items</p>
            <p>Shipping Address</p>
            <p>Payment</p>
        </div>
        <div className="w-full md:px-[4rem] mt-[4rem] md:flex gap-8 px-[2rem]">
            <div className="md:w-[70%] w-full">
                <div className="py-2 px-4 border-2 border-[grey]">
                    <p className="text-purple font-semibold">Free Shipping for Members.</p>
                    <p>Become a Shopzy Member  for fast and free shipping.
                        <a href="/">Join us</a>
                    </p>
                </div>
                <div className="py-2 px-4 bg-light-purple mt-2">
                    <p className="text-purple font-semibold">Save Up to 40%</p>
                    <p className="font-semibold">Become a promoter get extra discounts
                    </p>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-8 text-center">Cart</h3>
                <CartItem
                setTotalItem={setTotalItem}/>
                <CartItem
                setTotalItem={setTotalItem}/>
                <CartItem
                setTotalItem={setTotalItem}/>
            </div>
            <div className="md:w-[30%] w-full">
                <p className="text-2xl font-semibold mb-4">Summary</p>
                <div className="w-full flex justify-between">
                    <p className="font-semibold">Do you have a Promo Code?</p>
                    <input type="text" className="focus:outline-none border-b-2 w-[6rem]" />
                </div>
                <div className="w-full flex justify-between py-2">
                    <p>Total Items</p>
                    <p className="font-extrabold">{totalItem}</p>
                </div>
                <div className="w-full flex justify-between py-2">
                    <p>Expected Shipping</p>
                    <p className="font-extrabold">2 days</p>
                </div>
                <div className="w-full flex justify-between py-2">
                    <p>Subtotal</p>
                    <p className="font-extrabold">$90.00</p>
                </div>
                <div className="w-full flex justify-between py-2">
                    <p>Estimated Shipping & Handling</p>
                    <p className="font-extrabold">$8.00</p>
                </div>
                <div className="w-full flex justify-between py-2">
                    <p>Estimated Tax</p>
                    <p className="font-extrabold">-</p>
                </div>
                <div className="w-full flex justify-between py-2 mt-2 border-t-2 border-b-2">
                    <p>Total</p>
                    <p className="font-extrabold">$98.00</p>
                </div>
                <button type="button" className="w-full h-[3rem] bg-gradient-to-br mt-4 from-purple to-pink text-[white] rounded-[1.5rem] border-non">Checkout</button>
            </div>
        </div>
    </section>
}