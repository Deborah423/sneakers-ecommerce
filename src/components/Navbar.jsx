import cart from "../images/cart.svg";
import React, { useState, useContext } from "react";
import profile from "../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/Cart";
import CartPage from "./CartPage";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { inCart, isOpen, toggleCart } = useContext(CartContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className=" w-screen my-auto   px-10 ">
        <nav className=" md:border-b  border-grey-100 flex justify-between pt-4 pb-5 items-center">
          <div className="flex gap-10  ">
            <div className=" flex md:block justify-start items-center ">
              <div
                className="md:hidden mr-6 cursor-pointer "
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>

              <h1 className="text-xl sm:text-2xl md:text-4xl leading-tight tracking-tighter">
                <strong>sneakers</strong>
              </h1>
            </div>
            <div className="hidden md:block items-stretch h-full mt-4  ">
              <ul className="flex items-stretch h-full space-x-8   ">
                {["collections", "men", "women", "about", "contact"].map(
                  (i) => (
                    <li
                      className="cursor-pointer capitalize hover:border-b-2  border-orange-300 h-full "
                      key={i}
                    >
                      {i}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex space-x-10 items-center justify-end">
            <div onClick={toggleCart} className="flex">
              <img className="w-6 h-6 cursor-pointer" src={cart} alt="img" />
              {inCart > 0 ? (
                <span className="bg-red-500 rounded-full w-4 h-3 translate-x-[-13px] text-xs flex justify-center">
                  {inCart > 0 && inCart}
                </span>
              ) : null}
            </div>
            <div className="absolute top-[9%] md:top-[13%] shadow-lg bg-white">
              {isOpen ? <CartPage /> : null}
            </div>

            <img
              className="w-12 h-12 cursor-pointer"
              src={profile}
              alt="profile"
            />
          </div>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen bg-white z-10 md:hidden transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[-100vh]"
        }`}
      >
        <div className="flex flex-col h-full pt-5 px-4">
          <div className="flex mb-4">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className="flex  flex-col space-y-4 font-extrabold pt-10">
            {["collections", "men", "women", "about", "contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer capitalize hover:border-b-2 border-orange-300 h-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
