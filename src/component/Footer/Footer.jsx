import { useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll"

const Footer = () => {
    const navigate = useNavigate();

    const scrollToElement = (elementId) => {
        navigate("/");

        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };



    return (
        <footer className="bg-footer bg-cover bg-right text-white py-6">
            <div className="container flex flex-wrap md:justify-end gap-10">
                <div className="">
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <p className="mt-4">Email: Dahar@gmail.com</p>
                    <p>Telephone: (123) 456-7890</p>
                    <p>Address: Jl. Dieng Km 11, Wonosobo, Central Java</p>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold">Useful Links</h2>
                    <ul className="mt-4">
                        <li><ScrollLink onClick={() => scrollToElement("menuSection")} to="menuSection" smooth={true} spy={true} duration={500} className="hover:text-red-500 cursor-pointer">Menu</ScrollLink></li>
                        <li><ScrollLink onClick={() => scrollToElement("aboutSection")} to="aboutSection" smooth={true} spy={true} duration={500} offset={-55} className="hover:text-red-500 cursor-pointer">About us</ScrollLink></li>
                        <li><ScrollLink onClick={() => scrollToElement("serviceSection")} to="serviceSection" smooth={true} spy={true} duration={500} offset={-90} className="hover:text-red-500 cursor-pointer">Our Service</ScrollLink></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p>&copy; 2023 All Rights Reserved.</p>
            </div>
        </footer>

    );
}

export default Footer;
