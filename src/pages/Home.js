import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Login from "../components/Login"
export default function Home(){
    return <section id = "home__section" className="w-full h-full bg-light-grey">
        <Navbar/>
        <Hero/>
        <Content/>
        <Footer/>
        {/* <Login/> */}
    </section>
}