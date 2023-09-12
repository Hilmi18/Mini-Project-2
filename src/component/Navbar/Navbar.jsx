import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavbarStyle.css";
import { FiShoppingCart } from "react-icons/fi"
import { Link as ScrollLink } from "react-scroll";
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"




const Navbar = ({ background }) => {

    const [transparent, setTransparent] = useState('containers')
    const [cartItemCount, setCartItemCount] = useState(0);
    const [click, setCLick] = useState(false)

    const navigate = useNavigate()

    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent("activeContainers")
        } else {
            setTransparent("containers")
        }
    }
    window.addEventListener("scroll", addBg)

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }

    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-black bg-opacity-40 mt-1 pb-5 transition">
            <ul className="text-center flex flex-col items-center justify-center gap-5 text-xl p-20 h-24  ">
                <Link to="/" className="text-white text-[17px] cursor-pointer hover:text-red-500">
                    <li>Home</li>
                </Link>
                <Link to="/cart" spy={true} smooth={true} className="text-white text-[17px] p-1 rounded-lg relative">
                    <li>
                        <FiShoppingCart className="text-[20px]" />
                        <span className="bg-red-500 text-white text-[10px] rounded-xl px-2 absolute top-0 right-0 -mt-2 -mr-4 h-4 w-6 flex justify-center items-center">{cartItemCount}</span>
                    </li>
                </Link>
                <button onClick={handleLogout} className="text-white text-[17px] border border-white flex items-center p-1 rounded-lg  ml-2">
                    <li>Logout</li>
                </button>

            </ul >
        </div >
    </>

    const handleClick = () => {
        setCLick(!click)
    }

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItemCount(storedCartItems.length);
    }, [cartItemCount]);

    return (
        <div className={`${transparent} ${background} flex justify-between px-20 py-[15px] pt-11 fixed w-full max-w-[1800px]`}>
            <div className="flex items-center flex-1 z-30">
                <Link className="text-white text-[25px]">Dahar</Link>
            </div>

            <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex items-center gap-8 mr-16 text-[18px]">
                        <Link to="/" className="text-white text-[17px] cursor-pointer hover:text-red-500">
                            <li>Home</li>
                        </Link>
                        <Link to="/cart" spy={true} smooth={true} className="text-white text-[17px] p-1 rounded-lg relative">
                            <li>
                                <FiShoppingCart className="text-[20px]" />
                                <span className="bg-red-500 text-white text-[10px] rounded-xl px-2 absolute top-0 right-0 -mt-2 -mr-4 h-4 w-6 flex justify-center items-center">{cartItemCount}</span>
                            </li>
                        </Link>
                        <button onClick={handleLogout} className="text-white text-[17px] border border-white flex items-center p-1 rounded-lg  ml-2">
                            <li>Logout</li>
                        </button>
                    </ul >
                </div >
            </div>

            <div>
                {click && content}
            </div>
            <button className="block md:hidden transition text-white z-20" onClick={handleClick}>
                {click ? <FaTimes /> : <CiMenuFries />}
            </button>
        </div >
    );
}

export default Navbar;


