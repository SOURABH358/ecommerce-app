import Navbar from "../components/Navbar";
import { products } from "../utils/data";
import { categories } from "../utils/data";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Categories() {
    return <section className="w-full min-h-[100vh] bg-light-grey">
        <Navbar />
        <p className="py-2 px-4 bg-[white] mx-2 rounded-md mt-2">
            <span className="text-[1.2rem] font-bold">Categories</span>
            <span className="px-4">{'>>'}</span>
            <span className="">Mobiles</span>
        </p>
        <div className="w-full flex md:gap-x-4 mt-6">
            <div className="md:w-[17rem] w-[13rem] h-fit top-0 bg-[white] py-4 px-4 sticky  rounded-r-lg">
                <p className="px-4 py-2 border-b-2 border-[grey]" >Categories</p>
                <div >
                    {categories.map((item, i) => {
                        return <p key={i * 201} className={`py-2 px-4 hover:bg-light-purple cursor-pointer my-4 
                        rounded-md ${item === 'Mobiles' ? 'bg-purple text-[white]' : null}`}>{item}</p>
                    })}
                </div>
            </div>
            <div className="w-full px-4 flex flex-wrap gap-8 md:justify-center">
                {products.map(item => {
                    return item.categories === 'Mobiles' ?
                        <div key={item.id*203} className="md:w-[22rem] w-full p-4 h-[30rem] rounded-xl shadow-2xl bg-[white] cursor-pointer">
                            <div className="w-full flex justify-center border-light-purple border-2 rounded-md py-4">
                                <img src={item.thumbnail} alt="category-product" className="h-[15rem]" />
                            </div>
                            <p className="text-center mt-4">{item.name}</p>
                            {/* <p className="text-[grey] text-[0.9rem] mt-2">{item.description.length > 50 ? item.description.slice(0, 50) : item.description}</p> */}
                            <div className="flex justify-between items-start pt-4">
                                <div className="flex gap items-center">
                                    <p className="text-dark-green pr-2">{item.ratings}</p>
                                    {item.ratings > 0 ? item.ratings >= 1 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                                    {item.ratings > 1 ? item.ratings >= 2 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                                    {item.ratings > 2 ? item.ratings >= 3 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                                    {item.ratings > 3 ? item.ratings >= 4 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                                    {item.ratings > 4 ? item.ratings >= 5 ? <BsFillStarFill className="text-dark-green" /> : <BsStarHalf className="text-dark-green" /> : <BsStar className="text-dark-green" />}
                                </div>
                                <div className="flex gap-x-2">
                                    <p className="px-2 h-fit rounded-md bg-light-purple text-purple font-bold">{item.discount} off</p>
                                    <div >
                                        <p className="font-bold">{item.price}</p>
                                        <p className="line-through text-[grey]">{item.originalPrice}</p>
                                    </div>
                                </div>
                            </div>
                                <p className="text-left text-[0.9rem] mt-4 text-purple border-purple border-[1px] w-fit px-2 rounded-md">Shopzy certified</p>
                        </div> : null
                })}
            </div>
        </div>
    </section>
}