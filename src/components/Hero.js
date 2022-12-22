import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
export default function Hero() {
    return <section id="hero__section" className="w-full">
        <p className="px-8 py-2">Categories |
            <span className="px-4">Women's Wear</span> |
            <span className="px-4">Men's Wear</span> |
            <span className="px-4">Electronics</span> |
            <span className="px-4">Groceries</span> |
            <span className="px-4">Sports Wear</span> |
            <span className="px-4">Furnitures</span>
        </p>
        <Swiper className="mySwiper"
            slidesPerView={1}
            allowTouchMove={false}
            centeredSlides={true}
            loop={true}
            effect="fade"
            fadeEffect={{
                crossFade : true
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
                clickable: true
            }}
            // navigation={true}
        >
            <SwiperSlide className="">
                <div className="bg-gradient-to-br from-purple to-pink h-[20rem]">
                    <img className='w-full ' src='/assets/banners/banner-1.jpg' alt="banner-1"/>
                </div></SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-[20rem]">
                    <img className='w-full h-full' src='/assets/banners/banner-2.jpg' alt="banner-2"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-[20rem]">
                    <img className='w-full h-full' src='/assets/banners/banner-3.jpg' alt="banner-3"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-[20rem]">
                    <img className='w-full h-full' src='/assets/banners/banner-4.jpg' alt="banner-4"/>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
}