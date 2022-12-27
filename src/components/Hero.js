import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import { categories } from '../utils/data';
export default function Hero() {
    return <section id="hero__section" className="w-full bg-[white]">
        <p className="px-8 py-2 md:block hidden">
            <span className='px-4'>Categories</span>
            {categories.map(item=>{
                return <span className='px-4 border-l-2'>{item}</span>
            })}
        </p>
        <select className='py-2 px-2 my-2 mx-[2.5%] w-[95%] focus:outline-none md:hidden'>
            <option>Categories</option>
            <option>Women's Wear</option>
            <option>Men's Wear</option>
            <option>Electronics</option>
            <option>Groceries</option>
            <option>Sports Wear</option>
            <option>Furnitures</option>
        </select>
        <Swiper className="mySwiper md:h-[20rem] h-[20rem]"
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
                <div className="bg-gradient-to-br from-purple to-pink h-full">
                    <img className='w-full h-full' src='/assets/banners/banner-1.jpg' alt="banner-1"/>
                </div></SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-full">
                    <img className='w-full h-full' src='/assets/banners/banner-2.jpg' alt="banner-2"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-full">
                    <img className='w-full h-full object-fill' src='/assets/banners/banner-3.jpg' alt="banner-3"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-full">
                    <img className='w-full h-full' src='/assets/banners/banner-4.jpg' alt="banner-4"/>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
}