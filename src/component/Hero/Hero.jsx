import Navbar from "../../component/Navbar/Navbar";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
    return (
        <div className="min-h-[600px] bg-hero bg-cover">
            <Navbar />
            <div className=" container mx-auto min-h-[720px] xl;min-h-[980px] flex justify-center lg:justify-start items-center ">
                <div className="text-center">
                    <div className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1">Enjoy the Finest Dining Experience in Town</div>
                    <h1 className=" text-6xl lg:text-8xl font-bold mb-5 font-primary italic text-white">Dahar</h1>
                    <p className="text-white max-w-[540px] mb-8">An Array of Extraordinary Menus at Your Fingertips</p>
                    <ScrollLink to="menuSection" spy={true} smooth={true} duration={500} className="text-white p-[10px] bg-red-500 rounded-md px-10 font-semibold cursor-pointer hover:bg-red-600">See Menu</ScrollLink>
                </div>
            </div>
        </div>
    );
}

export default Hero;