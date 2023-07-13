import cart from "../images/cart.svg";
import React, { useState, useContext } from "react";
import profile from "../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/Cart";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { count } = useContext(CartContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="px-5 pb-5 md:px-10 w-screen my-auto  ">
        <nav className=" md:shadow-sm flex justify-between pt-4 pb-5 items-center">
          <div className="flex gap-10  ">
            <div className=" flex md:block justify-start items-center ">
              <div className="md:hidden mr-6" onClick={toggleMobileMenu}>
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
                    <li className="cursor-pointer capitalize hover:border-b-2  border-orange-300 h-full ">
                      {i}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex space-x-10 items-center justify-end">
            <div>
              <img className="w-5 h-5" src={cart} alt="img" />
              <span>{count > 0 && count}</span>
            </div>

            <img className="w-12 h-12" src={profile} alt="profile" />
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
