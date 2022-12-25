import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function () {
    return (<section className="w-full h-[100vh] bg-light-grey grid place-items-center">
        <div className="w-[25rem] py-8 px-8">
            <FcApproval className="text-[5rem] mx-auto" />
            <p className="text-2xl font-bold text-center">Order Confirmed !!!</p>
            <p className="text-center">Your delivery is on your way, we will be notifying you prior your delivery. 
                You can track the status of your delivery by following this <a href="/" className="underline text-[blue]">link</a>
            </p>
            <p className="underline text-center mt-4 text-[blue]"><Link to="/">Continue Shopping</Link></p>
        </div>
    </section>)
}