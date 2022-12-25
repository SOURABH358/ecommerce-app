import AddtoCart from "../components/AddtoCart";
import AddressForm from "../components/AddressForm";
import Payment from "../components/Payment";
import Confirmed from "../components/Confirmed";
import { useState } from "react";
export default function Cart(){
    const [showCart, setShowCart] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    return <section className="w-full h-full">
        {showCart?<AddtoCart
        setShowCart={setShowCart}
        setShowForm={setShowForm}/>:null}
        {showForm?<AddressForm
        setShowForm={setShowForm}
        setShowPayment={setShowPayment}/>:null}
        {showPayment?<Payment/>:null}
        <Confirmed/>
    </section>
}