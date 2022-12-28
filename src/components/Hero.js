import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import { categories } from '../utils/data';
import { GetProdContext } from '../Reducer/productContext';
import { Link } from 'react-router-dom';
export default function Hero() {
    const { setCurrentCat } = GetProdContext();

    return <section id="hero__section" className="w-full bg-[white]">
        <p className="px-8 py-2 md:block hidden">
            <span className='px-4'>Categories</span>
            {categories.map(item => {
                return <span className='px-4 border-l-2 cursor-pointer' onClick={() => setCurrentCat(item)}>
                    <Link to="categories">{item}</Link>
                </span>
            })}
        </p>
        <select className='py-2 px-2 my-2 mx-[2.5%] w-[95%] focus:outline-none md:hidden' onChange={(e)=>setCurrentCat(e.target.value)}>
            <option value = ""><Link to = "categories">Categories</Link></option>
            <option value = "Mobiles"><Link to = "categories">Mobiles</Link></option>
            <option value = "Womens Wear"><Link to = "categories">Womens Wear</Link></option>
            <option value = "Mens Wear"><Link to = "categories">Mens Wear</Link></option>
            <option value = "Home"><Link to = "categories">Home</Link></option>
            <option value = "Appliances"><Link to = "categories">Appliances</Link></option>
            <option value = "Electronics"><Link to = "categories">Electronics</Link></option>
            <option value = "Groceries"><Link to = "categories">Groceries</Link></option>
        </select>
        <Swiper className="mySwiper md:h-[20rem] h-[20rem]"
            slidesPerView={1}
            allowTouchMove={false}
            centeredSlides={true}
            loop={true}
            effect="fade"
            fadeEffect={{
                crossFade: true
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
                    <img className='w-full h-full' src='/assets/banners/banner-1.jpg' alt="banner-1" />
                </div></SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-full">
                    <img className='w-full h-full' src='/assets/banners/banner-2.jpg' alt="banner-2" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-full">
                    <img className='w-full h-full object-fill' src='/assets/banners/banner-3.jpg' alt="banner-3" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="bg-pink h-full">
                    <img className='w-full h-full' src='/assets/banners/banner-4.jpg' alt="banner-4" />
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
}