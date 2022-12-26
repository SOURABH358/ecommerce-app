import { BsFillHouseFill, BsBuilding } from "react-icons/bs";
export default function AddressForm({ setShowForm, setShowPayment }) {
    async function handleSubmit(e) {
        setShowForm(false);
        setShowPayment(true);
        
    }
    return <section className="w-full min-h-[100vh] pt-8">
        <div className="w-full flex items-center justify-center">
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
            <div className="w-[10rem] h-2 bg-purple"></div>
            <div className="w-4 h-4 rounded-[50%] bg-purple"></div>
            <div className="w-[10rem] h-2 bg-[grey]"></div>
            <div className="w-4 h-4 rounded-[50%] bg-[grey]"></div>
        </div>
        <div className="w-full flex items-center justify-center py-4 gap-16 shadow-xl">
            <p className="">Select items</p>
            <p>Shipping Address</p>
            <p>Payment</p>
        </div>
        <div className="w-full md:bg-light-grey py-[2rem] md:pt-[4rem]">
            <form className="md:w-[31.25rem] md:mx-auto w-full px-4 bg-[white] py-10 md:shadow-2xl  rounded-xl"
                onSubmit={(e) => handleSubmit(e)}>
                <p className="text-2xl font-bold mb-4">Add Shipping Address</p>
                <input type="text" name="name" placeholder="Fullname (Required)*" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md" />
                <input type="text" name="phone" placeholder="Phone Number (Required)*" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md" />
                <div className="grid grid-cols-2 gap-x-4">
                    <input type="number" placeholder="Pincode (Required)*" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md" />
                    <input type="country" placeholder="Country (Required)*" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md" />
                    <select name="state" id="state" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md">
                        <option value="">State (Required)*</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Assam">Bihar</option>
                        <option value="Assam">Chandigarh</option>
                        <option value="Assam">Chhattisgarh</option>
                        <option value="Assam">Dadra & Nagar Haveli & Daman & Diu</option>
                        <option value="New Delhi">Delhi</option>
                        <option value="Assam">Goa</option>
                        <option value="Assam">Gujarat</option>
                        <option value="Assam">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Himachal Pradesh">Jammu & Kashmir</option>
                        <option value="Himachal Pradesh">Jharkhand</option>
                        <option value="Himachal Pradesh">Karnataka</option>
                        <option value="Uttarakhand">Kerala</option>
                        <option value="Uttarakhand">Ladakh</option>
                        <option value="Uttarakhand">Lakshadweep</option>
                        <option value="Uttarakhand">Madhya Pradesh</option>
                        <option value="Uttarakhand">Maharashtra</option>
                        <option value="Uttarakhand">Manipur</option>
                        <option value="Uttarakhand">Meghalaya</option>
                        <option value="Uttarakhand">Mizoram</option>
                        <option value="Uttarakhand">Nagaland</option>
                        <option value="Uttarakhand">Odisha</option>
                        <option value="Uttarakhand">Puducherry</option>
                        <option value="Uttarakhand">Punjab</option>
                        <option value="Uttarakhand">Rajasthan</option>
                        <option value="Uttarakhand">Sikkim</option>
                        <option value="Uttarakhand">Tamil Nadu</option>
                        <option value="Uttarakhand">Telangana</option>
                        <option value="Uttarakhand">Tripura</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Uttarakhand">Uttar Pradesh</option>
                        <option value="Uttarakhand">West Bengal</option>
                    </select>
                    <input type="city" name="city" placeholder="City (Required)*" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md" />
                </div>
                <input type="text" name="address1" placeholder="House No., Building Name (Required)*" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md" />
                <input type="text" placeholder="Road name, Area, Colony (Required)*" className="w-full border-2 border-purple mb-8 py-2 px-2 rounded-md" />
                <div className="flex w-full gap-8">
                    <button type="button" className="flex items-center gap-x-2 py-2 px-4 border-2 border-purple text-purple rounded-3xl focus:bg-purple focus:border-none focus:text-[white]"><BsFillHouseFill /><p>Home</p></button>
                    <button type="button" className="flex items-center gap-x-2 py-2 px-4 border-2 border-purple text-purple rounded-3xl focus:bg-purple focus:border-none focus:text-[white]"><BsBuilding /> <p>Work</p></button>
                </div>
                <button type="submit" className="w-full py-3 text-[white] bg-gradient-to-br from-purple to-pink 
                rounded-3xl mt-8" >Save Address</button>
            </form>
        </div>
    </section>
}