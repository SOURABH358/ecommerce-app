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
            navigation={true}
        >
            <SwiperSlide className=""><div className="bg-pink h-[10rem]">Slide 1</div></SwiperSlide>
            <SwiperSlide className=""><div className="bg-pink h-[10rem]">Slide 2</div></SwiperSlide>
            <SwiperSlide className=""><div className="bg-pink h-[10rem]">Slide 3</div></SwiperSlide>
            <SwiperSlide className=""><div className="bg-pink h-[10rem]">Slide 4</div></SwiperSlide>
        </Swiper>
    </section>
}