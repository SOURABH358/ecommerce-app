export default function Payment() {
    return <section className="w-full min-h-[100vh] pt-8">
        <div className="w-full flex items-center justify-center">
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
            <div className="w-[10rem] h-2 bg-purple"></div>
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
            <div className="w-[10rem] h-2 bg-purple"></div>
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
        </div>
        <div className="w-full flex items-center justify-center py-4 gap-16 shadow-xl">
            <p className="">Select items</p>
            <p>Shipping Address</p>
            <p>Payment</p>
        </div>
        <div className="w-full md:px-[10rem] py-[4rem] px-[1rem]">
            <p className="text-2xl font-bold">Payment Method</p>
            <div className="flex mt-[2rem]">
                <div className="flex flex-col px-2 gap-y-[2rem] w-[40%] md:w-[30%] border-r-2">
                    <p className="font-semibold underline-offset-2 underline">Credit / Debit / ATM Card</p>
                    <p>UPI / Wallet</p>
                    <p>Net Banking</p>
                    <p>EMI (Easy Installments)</p>
                    <p>Cash on Delivery</p>
                    <p>Gift Cards / Vouchers</p>
                    <p>Credit Card / Debit Card</p>
                </div>
                <div className="md:pl-[4rem] px-4 md:w-[70%]">
                    <input className="w-full focus:outline-none border-2 border-purple py-2 px-2 rounded-lg" type="text" placeholder="Card Number" />
                    <div className="md:flex-row flex flex-col md:gap-[4rem] my-[2rem] gap-[2rem] w-full">
                        <div className="w-full flex gap-x-4 ">
                            <input className="w-full focus:outline-none border-2 border-purple py-2 px-2 rounded-lg" type="date" />
                            <p>Expiry Date</p>
                        </div>
                        <input className="w-full focus:outline-none border-2 border-purple py-2 px-2 rounded-lg" type="number" placeholder="CVV" />
                    </div>
                    <input className="w-full focus:outline-none border-2 border-purple py-2 px-2 rounded-lg" type="text" placeholder="Name on card" />
                    <button className="w-full bg-gradient-to-br from-purple to-pink border-none rounded-xl py-3 my-8 text-[white]" type="button">Pay</button>
                    <p className="w-full bg-light-purple text-center rounded-md py-2">The card will be saved for faster payment experience.</p>
                </div>
            </div>

        </div>
    </section>
}