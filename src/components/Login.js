
export default function Login() {
    
    function handleSubmit(e){
        e.preventDefault();

    }
    return <section className="login__section w-full h-[100vh] relative">
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-10"></div>
        <div className="z-20 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-[31.25rem] md:h-[60vh] w-[100%] h-[100%] bg-[white] flex shadow-md md:rounded-lg md:overflow-hidden">
            <div className="bg-purple basis-1/3"></div>
            <form className="basis-2/3 py-8 px-8" onSubmit={(e)=>handleSubmit(e)}>
                <h3 className="text-2xl text-center">Log In</h3>
                <p className="pt-4">Email</p>
                <input type="email" className="focus:outline-none border-b-2 w-full pt-2" />
                <p className="pt-8">Password</p>
                <input type="password" className="focus:outline-none border-b-2 w-full pt-2" />
                <button type="submit" className="from-purple to-pink bg-gradient-to-br text-[white] rounded-lg py-2 px-6 border-none w-full mt-8">Log In</button>
                <p className="text-[0.9rem] text-center mt-4">Dont have an account ?
                    <span className="text-purple cursor-pointer hover:underline"> Sign Up</span>
                </p>
            </form>
        </div>
    </section>
}