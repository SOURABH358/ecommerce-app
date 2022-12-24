import Navbar from "../components/Navbar"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export default function Products() {
    const preEl = useRef(null)
    const nextEl = useRef(null)
    return <section className="w-full h-full">
        <Navbar />
        <div className="md:w-[80%] md:mx-auto w-full md:py-[10rem] md:flex md:gap-x-[3rem]">
            <Swiper
                className="mySwiper md:w-[31.25rem] w-full relative"
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={{
                    clickable:true,
                    prevEl:preEl.current,
                    nextEl:nextEl.current
                }}
                pagination={{
                    clickable: true,
                }}
                
            >
                <div ref={preEl}>
                    
                <BsChevronLeft className = "text-[white] text-3xl bolder cursor-pointer z-20 absolute top-[50%]" />
                </div>
                <div ref={nextEl}>
                <BsChevronRight className= "text-[white] text-3xl z-20 bolder cursor-pointer absolute top-[50%] right-0" />
                </div>
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
                {/* <div ref={page} className="md:flex mt-3rem w-[31.25rem] justify-between z-20 border-b-2">
                    <div className="w-[3rem] rounded-md overflow-hidden"><img src="/assets/products/product-1/image-product-1.jpg" alt="product-1" className="w-full" /></div>
                    <div className="w-[3rem] rounded-md overflow-hidden"><img src="/assets/products/product-1/image-product-1.jpg" alt="product-1" className="w-full" /></div>
                    <div className="w-[3rem] rounded-md overflow-hidden"><img src="/assets/products/product-1/image-product-1.jpg" alt="product-1" className="w-full" /></div>
                    <div className="w-[3rem] rounded-md overflow-hidden"><img src="/assets/products/product-1/image-product-1.jpg" alt="product-1" className="w-full" /></div>
                </div> */}
                
            </Swiper>
            <div className="text-left">
                <p>SNEAKER COMPANY</p>
            </div>
        </div>
    </section>
}