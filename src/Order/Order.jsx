import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Order = () => {
  const [menu, setMenu] = useState({});
  const [quantity, setQuantity] = useState(1);
  const param = useParams();

  const getDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param.userId}`)
      .then((res) => {
        setMenu(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrev = () => {
    setQuantity((e) => (e > 1 ? e - 1 : 1));
  };
  const handleNext = () => {
    setQuantity((e) => (e < 9 ? e + 1 : 9));
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: menu.id,
      name: menu.name,
      price: menu.price,
      quantity: quantity,
      image: menu.imageUrl,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find((item) => item.id === cartItem.id);

    if (existingItem) {
      existingItem.quantity += cartItem.quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    addToCart(cartItem);

    setCartItemCount(existingCart.length + cartItem.quantity);
  };
  window.scrollTo(0, 0);

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <Navbar background="bg-black bg-opacity-40 pt-3 z-50" />

      <div className="p-4 md:pt-28 mb-[50px] md:mb-[65px] lg:px-20 xl:px-40 sm:h-[600px] flex flex-col justify-around md:flex-row md:gap-8 md:items-center pt-32">
        <div className="relative w-full h-1/2  md:h-[70%] flex items-center justify-center sm:mt-16 lg:mt-0">
          <div>
            <div className=" absolute flex items-center -mt-10 text-md mb-3 lg:mb-10">
              <Link to="/" className=" text-red-500 hover:text-red-700">
                Home
              </Link>
              <RiArrowRightSLine className="mx-2" />
              <span>Order</span>
            </div>
            <img
              src={menu.imageUrl}
              alt=""
              className=" max-h-[300px] w-[600px] rounded-xl"
            />
          </div>
        </div>

        <div className="h-1/2 flex flex-col gap-4 md:align-center mt-10  md:h-[70%]">
          <h1 className="text-3xl font-bold uppercase">{menu.name}</h1>
          <p>{menu.description}</p>
          <p className="text-2xl font-bold">${menu.price * quantity}</p>

          <div className="flex justify-between items-center mb-20">
            <div className="flex justify-between w-full p-3 border border-red-500 rounded-tl-md rounded-bl-md">
              <span>Quantity</span>
              <div className="flex gap-4 items-center">
                <button onClick={handlePrev}>{"<"}</button>
                <span>{quantity}</span>
                <button onClick={handleNext}>{">"}</button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="upparcase w-56 p-3 bg-red-500 text-white border border-red-500 hover: hover:border-red-600 hover:bg-red-600 rounded-tr-md rounded-br-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
