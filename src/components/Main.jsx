import React, { useContext, useState } from "react";
import sneaks from "../images/image-product-1.jpg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import { ReactComponent as CartIcon } from "../images/cart-plain.svg";
import CartContext from "../context/Cart";

export default function Main() {
  //   const [counter, setCounter] = useState(0);
  const { count, deductCounter, setCount } = useContext(CartContext);
  return (
    <div className="block md:flex justify-between md:w-4/5 m-auto md:pt-10">
      <div className="flex-1">
        <img
          className="object-cover h-80 w-full md:rounded-xl md:h-96  md:w-96"
          src={sneaks}
          alt="img"
        />
      </div>

      <div className="flex-1">
        <div>
          <h2 className="text-sm p-4 text-orange-500">
            <strong>SNEAKERS COMPANY</strong>
          </h2>
          <h1 className="px-4 text-3xl">
            <strong>Fall Limited Edition Sneakers</strong>
          </h1>
          <p className="p-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer
          </p>
        </div>

        <div>
          <p className="font-bold text-4xl pb-6">${125.0 * (count || 1)}.00</p>
        </div>

        <div className="justify-center flex">
          <div className=" bg-slate-100 mb-3 flex justify-around rounded-md w-full mx-4 h-14 ">
            <button onClick={deductCounter}>
              <img src={minus} alt="minus" />
            </button>
            <input
              className="text-center text-lg bg-slate-100"
              value={count}
              type="number"
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <button onClick={() => setCount(count + 1)}>
              <img className="" src={plus} alt="plus" />
            </button>
          </div>
        </div>

        <div className="justify-center flex ">
          <div className="flex bg-orange-500 rounded-md w-full mx-4 h-14 gap-3 justify-center items-center cursor-pointer">
            <CartIcon className="fill-white" />
            <p className="text-white">Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
