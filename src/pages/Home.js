import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Content from "../components/Content"
export default function Home(){
    return <section id = "home__section" className="w-full h-full">
        <Navbar/>
        <Hero/>
        <Content/>
    </section>
}