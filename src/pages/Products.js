import Navbar from "../components/Navbar"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Products() {
    return <section className="w-full h-full">
        <Navbar />
        <div className="md:w-60% md:mx-auto w-full md:py-[10rem] flex gap-x-[3rem]">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper"
            >
                <SwiperSlide className="w-full rounded-lg overflow-hidden">
                    <img src="./assets/product-1/image-product-1.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full rounded-lg overflow-hidden">
                    <img src="./assets/product-1/image-product-1.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full rounded-lg overflow-hidden">
                    <img src="./assets/product-1/image-product-1.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full rounded-lg overflow-hidden">
                    <img src="./assets/product-1/image-product-1.jpg" alt="product-1" className="w-full" />
                </SwiperSlide>
                ...
            </Swiper>
            <div></div>
        </div>
    </section>
}