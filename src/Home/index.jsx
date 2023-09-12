import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import Service from "../component/Service/service";
import Menu from "../component/Menu/Menu";
import Footer from "../component/Footer/Footer"

const Home = () => {
    return (
        <div>
            <Hero />
            <About id="aboutSection" />
            <Service id="serviceSection" />
            <Menu id="menuSection" />
            <Footer />
        </div>
    );
}

export default Home;