import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { RiArrowRightSLine } from "react-icons/ri"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom";
import Payment from "../component/Payment/Payment";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showPayment, setShowPayment] = useState(false)

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleShowPayment = () => {
        setShowPayment(true)
    }
    window.scrollTo(0, 0);

    return (
        <div>
            <Navbar background="bg-black bg-opacity-40 pt-3 z-50" />
            <div className="mb-[100px] lg:mb-[145px]">
                {showPayment && (
                    <Payment
                        show={showPayment}
                    />
                )}
                {cartItems.length === 0 ? (
                    <p className="h-screen flex justify-center items-center text-[30px]" >Your cart is empty.</p>
                ) : (
                    <div className="flex-grow flex flex-col lg:flex-row lg:-mb-[130px]">

                        <div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-1/2 lg:px-16 mt-20 lg:mt-[140px]">
                            <div className="flex items-center text-md mb-3 lg:-mt-10  lg:mb-10">
                                <Link to="/" className=" text-red-500 hover:text-red-700">Home</Link>
                                <RiArrowRightSLine className="mx-2" />
                                <span>Cart</span>
                            </div>
                            {cartItems.map((item) => (
                                <div className="flex items-center lg: justify-between mb-4">
                                    <img className="w-[80px] h-[50px] rounded-lg" src={item.image} alt="" width={500} height={500} />
                                    <div className="flex-grow ml-5">
                                        <h1 className="text-lg">{item.name}</h1>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className="font-bold">${item.price * item.quantity}</h2>
                                        <span onClick={() => removeFromCart(item.id)} className="cursor-pointer ml-8"><BsFillTrash3Fill className="text-red-500" /></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-1/2 p-4 flex flex-col justify-center lg:h-screen lg:w-1/2 lg:px-20 mt-5 lg:mt-0 lg:pt-20 sticky top-0">
                            <div className="border rounded-lg border-opacity-40 border-gray-400 bg-gray-100 lg:-ml-[80px] lg:-mt-[50px] p-10 h-[300px] flex flex-col justify-center  gap-4">
                                <div className="flex justify-between">
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span>${calculateTotalPrice()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Service Cost</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery Cost</span>
                                    <span className="text-green-700">FREE</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span className="text-xl">TOTAL</span>
                                    <span className="text-2xl font-bold">${calculateTotalPrice()}</span>
                                </div>
                                <hr />
                                <button onClick={handleShowPayment} className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end font-bold hover:bg-red-600">Pay Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>

    );
};

export default Cart;
