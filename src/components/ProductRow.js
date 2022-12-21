import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { BsChevronCompactRight,BsChevronCompactLeft } from "react-icons/bs";
import 'swiper/css';
import "swiper/css/navigation";
import { useRef } from 'react';

export default function ProductRow({title}){
    const preEl = useRef(null)
    const nextEl = useRef(null)
    return <section className="px-4 w-full relative my-8">
        <h3 className="text-[1.25rem] text-[black] mb-4">{title}</h3>
        <Swiper
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={6}
        navigation={{
            prevEl:preEl.current,
            nextEl:nextEl.current
        }}
        breakpoints={{
            320:{
                slidesPerGroup:2,
                slidesPerView:2
            },
            
            640:{
                slidesPerGroup:3,
                slidesPerView:3
            },
            900:{
                slidesPerGroup:4,
                slidesPerView:4
            },
            1200:{
                slidesPerGroup:6,
                slidesPerView:6
            }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className = "absolute top-[50%] -translate-y-[50%] text-3xl left-1 z-10 cursor-pointer text-[white]" ref={preEl}><BsChevronCompactLeft/></div>
        <div className = "absolute top-[50%] -translate-y-[50%] text-3xl right-1 z-10 cursor-pointer text-[white]" ref={nextEl}><BsChevronCompactRight/></div>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 1</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 2</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 3</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 4</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 5</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 6</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 7</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 8</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 9</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 10</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 11</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 12</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 13</div></SwiperSlide>
        <SwiperSlide><div className='h-[20rem] bg-purple rounded-lg'>Slide 14</div></SwiperSlide>
      </Swiper>
    </section>
}