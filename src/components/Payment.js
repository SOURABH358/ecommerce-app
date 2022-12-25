export default function Payment(){
    return <section>
        <div className="w-full flex items-center justify-center">
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
            <div className="w-[10rem] h-2 bg-purple"></div>
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
            <div className="w-[10rem] h-2 bg-purple"></div>
            <div className="w-4 h-4 rounded-[50%] bg-[grey]"></div>
        </div>
        <div className="w-full flex items-center justify-center mt-2 gap-16">
            <p className="">Select items</p>
            <p>Shipping Address</p>
            <p>Payment</p>
        </div>
    </section>
}