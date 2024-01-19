import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Payment = ({ show }) => {
  const handlePayment = () => {
    localStorage.removeItem("cart");
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        show ? "" : "hidden"
      }`}
    >
      <div
        className={`modal-overlay absolute w-full h-full bg-gray-900 opacity-50 ${
          show ? "block" : "hidden"
        }`}
      ></div>
      <div className="bg-white py-14 w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto flex flex-col justify-center items-center">
        <div className="text-[100px] text-green-500">
          <BsPatchCheckFill />
        </div>
        <div className="text-2xl text-green-500 mt-5 font-semibold ">
          Payment Successful
        </div>
        <div className="mb-10">Thank you for your order.</div>
        <button onClick={handlePayment}>
          <Link
            to={"/"}
            className="bg-green-500 hover:bg-green-600 p-2 px-20 rounded-lg text-white font-bold "
          >
            Ok
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Payment;
