import AddtoCart from "../components/AddtoCart";
import AddressForm from "../components/AddressForm";
import Payment from "../components/Payment";
export default function Cart(){
    return <section className="w-full h-full py-8">
        {/* <AddtoCart/> */}
        <AddressForm/>
        {/* <Payment/> */}
    </section>
}