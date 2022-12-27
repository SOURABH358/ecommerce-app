import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import { BsFillStarFill } from "react-icons/bs";
import { GetProdContext } from '../Reducer/productContext';
import 'swiper/css';
import "swiper/css/navigation";

import { useRef } from 'react';
import { products } from '../utils/data';
import { Link } from 'react-router-dom';

export default function ProductRow({ category }) {
    const preEl = useRef()
    const nextEl = useRef()
    const {setCurrentProd} = GetProdContext();
    return <section className="px-4 w-full relative my-8 bg-[white] py-8">
        <h3 className="text-[1.25rem] text-[black] mb-4">{category}</h3>
        <Swiper
            slidesPerView={5}
            spaceBetween={40}
            slidesPerGroup={5}
            navigation={{
                clickable: true,
                prevEl: preEl.current,
                nextEl: nextEl.current
            }}
            breakpoints={{
                320: {
                    slidesPerGroup: 1,
                    slidesPerView: 1
                },

                640: {
                    slidesPerGroup: 2,
                    slidesPerView: 2
                },
                900: {
                    slidesPerGroup: 3,
                    slidesPerView: 3
                },
                1200: {
                    slidesPerGroup: 4,
                    slidesPerView: 4
                },
                1440: {
                    slidesPerGroup: 5,
                    slidesPerView: 5
                }
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {/* <div className="absolute top-[50%] font-bold -translate-y-[100%] text-[4rem] left-1 z-10 cursor-pointer text-purple" ref={preEl}><BsChevronCompactLeft /></div> */}
            {/* <div className="absolute top-[50%] font-bold -translate-y-[100%] text-[4rem] right-1 z-10 cursor-pointer text-purple" ref={nextEl}><BsChevronCompactRight /></div> */}
            {products.map(item => {
                if (item.categories === category)
                    return <SwiperSlide key={item.id}><div className=' rounded-lg'>
                        <Link to={`/products/${item.id}`} onClick={()=>setCurrentProd(item.id)}>
                        <div className='h-[20rem] flex justify-center'>
                            <img className='max-h-full' src={item.thumbnail} alt={`item-${item.id}`} /></div>
                        <p className='text-center my-4 h-[3rem]'>{item.name}</p>
                        <div className='flex justify-between'>
                            <p className='text-dark-green flex items-center gap-x-1'>{item.ratings}<BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></p>
                            <p className='text-red'>-{item.discount} off</p>
                        </div>
                        </Link>
                    </div></SwiperSlide>
            })}

        </Swiper>
    </section>
}