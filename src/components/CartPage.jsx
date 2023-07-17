import React, { useContext } from "react";
import CartContext from "../context/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import sneaks from "../images/image-product-1.jpg";

export default function CartPage() {
  const { count } = useContext(CartContext);

  return (
    <div className="w-80 h-50  ">
      <div className="border-b-2 w-full">
        <h1 className="text-2xl font-bold ml-3 mb-4 ">Cart</h1>
      </div>
      {count > 0 ? (
        <>
          <div className=" text-lg flex mt-5 px-3 items-center justify-center gap-5 ">
            <img
              className="object-scale-down w-3/12 md:rounded-sm "
              src={sneaks}
              alt="img"
            />
            <div className="text-gray-400 ">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                {" "}
                $125.00 * {count}{" "}
                <strong className="text-black">
                  ${125.0 * (count || 1)}.00{" "}
                </strong>
              </p>
            </div>
            <FontAwesomeIcon icon={faTrashCan} className="" />
          </div>
          <button className="flex my-5 text-white bg-orange-400 rounded-md m-auto w-5/6 h-10 justify-center items-center cursor-pointer">
            Checkout
          </button>
        </>
      ) : (
        <p className="text-center text-lg py-14">Your cart is empty.</p>
      )}
    </div>
  );
}
