import Navbar from "../components/Navbar"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsFillCartFill, BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { products } from "../utils/data";
import { GetProdContext } from '../Reducer/productContext';
import { GetAuthContext } from "../Reducer/AuthContext";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function Products() {
    const preEl = useRef()
    const nextEl = useRef()
    const [cart, setCart] = useState(0)
    const [product, setProduct] = useState({})
    const { currentProd } = GetProdContext();
    const currentUser = GetAuthContext();
    async function handleSubmit() {
        if(currentUser.uid)
        {
            const userRef = doc(db, "Users", currentUser.uid);
    
    
            await updateDoc(userRef, {
                Cart: arrayUnion({ ...product, quantity:cart })
            });
        }
        else{
            alert('Please log in!!')
        }
    }
    function displaySizes() {
        return <div className="flex gap-x-4 items-center mt-4">
            <p className="text-[1.2rem] font-bold">Sizes</p>
            <div className="flex gap-x-2">
                {product.Sizes ? product.Sizes.map(item => {
                    return <button className="focus:text-[white] py-2 w-[3rem] text-center border-2 cursor-pointer focus:bg-purple">{item}</button>
                }) : null}
            </div>
        </div>
    }
    useEffect(() => {
        products.map(item => {
            if (item.id === currentProd) {
                setProduct(item)
            }
            return item
        })

    }, [currentProd])

    return <section className="w-full h-full">
        <Navbar />
        <div id="products" className="md:w-[80%] md:mx-auto w-full py-[2rem] md:py-[7rem] md:grid md:grid-cols-[1fr_2fr] md:gap-x-[8rem]">
            <Swiper
                className="mySwiper w-full relative text-[white] h-fit"
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={{
                    clickable: true,
                    prevEl: preEl.current,
                    nextEl: nextEl.current,
                }}
                pagination={{
                    clickable: true,
                }}

            >
                {product.images ? product.images.map(item => {
                    return (<SwiperSlide className="w-full md:rounded-lg md:overflow-hidden flex justify-center">
                        <img src={item} alt="product-1" className="h-[25rem]" />
                    </SwiperSlide>)
                }) : null}



            </Swiper>
            <div className="text-left md:px-0 md:py-0 px-4 py-8">
                <p className="text-2xl text-purple font-bold">{product.brand}</p>
                <p className="text-4xl pb-8 font-semibold">{product.name}</p>
                <div className=" flex gap-x-2 mb-4 items-center text-[1.2rem]">
                    <p className="text-dark-green">{product.ratings}</p>
                    {product.ratings > 0 ? product.ratings >= 1 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                    {product.ratings > 1 ? product.ratings >= 2 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                    {product.ratings > 2 ? product.ratings >= 3 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                    {product.ratings > 3 ? product.ratings >= 4 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                    {product.ratings > 4 ? product.ratings >= 5 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                </div>
                <p className="flex gap-x-8">
                    <span className="text-[1.25rem] font-extrabold">₹ {product.price}</span>
                    <span className="bg-light-purple py-1 px-2 rounded-md text-purple text-[1rem] font-extrabold">{product.discount} off</span>
                </p>
                <p className="text-[grey] line-through font-semibold mb-8">₹ {product.originalPrice}</p>
                {product.specs ? <div className="mb-4">
                    <p className="font-bold">Specifications</p>
                    <ul className="">
                        {product.specs.split('|').map(item => <li className="py-2 text-[grey]">{item}</li>)}</ul>
                </div>
                    : null}
                {<div>
                    <p className="font-bold">Description</p>
                    <p className=" text-[grey]">{product.description}</p>
                </div>}
                {product.Sizes ? displaySizes() : ""}

                <div className="flex gap-x-4 mt-8 items-center">
                    <div className="bg-light-purple flex w-[50%] h-[3rem] justify-between py-4 px-4 items-center rounded-md">
                        <p className="text-purple font-semibold text-2xl cursor-pointer" onClick={() => cart > 0 ? setCart(cart - 1) : null}>-</p>
                        <p className="text-purple font-semibold text-[1.2rem]">{cart}</p>
                        <p className="text-purple font-semibold text-2xl cursor-pointer" onClick={() => setCart(cart + 1)}>+</p>
                    </div>
                    <button type="button" className={`bg-purple border-none rounded-md text-[white] w-[50%] h-[3rem] flex 
                    items-center justify-center gap-x-4 ${cart === 0 ? "disabled bg-light-purple" : ""}`} onClick={handleSubmit}><BsFillCartFill /><p>Add to Cart</p></button>
                </div>
            </div>
        </div>
    </section>
}