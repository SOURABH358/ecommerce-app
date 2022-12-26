import ProductRow from "./ProductRow"
import {categories} from "../utils/data"
export default function Content(){
    return <section className="">
        {categories.map((item,index)=>{
            return <ProductRow key={index+10000}
            category={item}/> 
        })}
        
    </section>
}