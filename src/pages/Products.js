import Navbar from "../components/Navbar"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsChevronRight,BsChevronLeft, BsFillCartFill } from "react-icons/bs";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

export default function Products() {
    const preEl = useRef()
    const nextEl = useRef()
    const [cart, setCart] = useState(0)
    return <section className="w-full h-full">
        <Navbar />
        <div className="md:w-[70%] md:mx-auto w-full md:py-[7rem] md:flex md:gap-x-[10rem]">
            <Swiper
                className="mySwiper md:w-[60rem] w-full relative text-[white]"
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={{
                    clickable:true,
                    prevEl:preEl.current,
                    nextEl:nextEl.current,
                }}
                pagination={{
                    clickable: true,
                }}
                
            >
               
                <SwiperSlide className="w-full md:rounded-lg md:overflow-hidden">
                    <img src="/assets/products/product-1/image-product-1.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full  md:rounded-lg md:overflow-hidden">
                    <img src="/assets/products/product-1/image-product-2.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full  md:rounded-lg md:overflow-hidden">
                    <img src="/assets/products/product-1/image-product-3.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full  md:rounded-lg md:overflow-hidden">
                    <img src="/assets/products/product-1/image-product-4.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                
                
            </Swiper>
            <div className="text-left md:px-0 md:py-0 px-4 py-8">
                <p className="">SNEAKER COMPANY</p>
                <p className="text-4xl py-8 font-semibold">Fall Limited edition sneakers</p>
                <p className=" text-[grey]">These-low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather offers.</p>
                <p className="flex gap-x-8 mt-8">
                    <span className="text-[1.25rem] font-extrabold">$ 125.00</span>
                    <span className="bg-light-purple py-1 px-2 rounded-md text-purple text-[1rem] font-extrabold">50%</span>
                </p>
                <p className="text-[grey] line-through font-semibold">$ 250.00</p>
                <div className="flex gap-x-4 mt-8 items-center">
                    <div className="bg-light-purple flex w-[50%] h-[3rem] justify-between py-4 px-4 items-center rounded-md">
                        <p className="text-purple font-semibold text-2xl cursor-pointer" onClick={()=>cart>0?setCart(cart-1):null}>-</p>
                        <p className="text-purple font-semibold text-[1.2rem]">{cart}</p>
                        <p className="text-purple font-semibold text-2xl cursor-pointer" onClick={()=>setCart(cart+1)}>+</p>
                    </div>
                    <button type="button" className="bg-purple border-none rounded-md text-[white] w-[50%] h-[3rem] flex items-center justify-center gap-x-4"><BsFillCartFill/><p>Add to Cart</p></button>
                </div>
            </div>
        </div>
    </section>
}