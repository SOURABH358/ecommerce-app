import ProductRow from "./ProductRow"
import {categories} from "../utils/data"
export default function Content(){
    return <section className="">
        {categories.map(item=>{
            return <ProductRow
            category={item}/> 
        })}
        
    </section>
}