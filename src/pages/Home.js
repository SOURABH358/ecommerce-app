import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
export default function Home(){
    return <section id = "home__section" className="w-full h-full">
        <Navbar/>
        <Hero/>
    </section>
}