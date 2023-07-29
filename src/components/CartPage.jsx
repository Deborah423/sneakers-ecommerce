import React, { useContext } from "react";
import CartContext from "../context/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import sneaks from "../images/image-product-1.jpg";
import { PaystackButton } from "react-paystack";

export default function CartPage() {
  const { inCart: count, handleClearCart } = useContext(CartContext);

  const paystackConfig = {
    reference: generateReference(),
    email: "customer@example.com",
    amount: (125 * 100) * (count || 1),
    publicKey: "pk_test_60989a69c3b8d1385913201ca3cda35a870459c6",
  };

  const handlePaystackSuccess = (reference) => {
    console.log("Payment successful. Reference: ", reference);
  };

  const handlePaystackClose = () => {
    console.log("Paystack dialog closed");
  };

  function generateReference() {
    // Generate a unique reference for each transaction
    return "REF" + Date.now() + Math.floor(Math.random() * 1000000000 + 1);
  }

  return (
    <div className="w-80 h-50">
      <div className="border-b-2 w-full">
        <h1 className="text-2xl font-bold ml-3 mb-4">Cart</h1>
      </div>
      {count > 0 ? (
        <>
          <div className="text-lg flex mt-5 px-3 items-center justify-center gap-5">
            <img
              className="object-scale-down w-3/12 md:rounded-sm"
              src={sneaks}
              alt="img"
            />
            <div className="text-gray-400">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 * {count}{" "}
                <strong className="text-black">
                  ${125.0 * (count || 1)}.00{" "}
                </strong>
              </p>
            </div>
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={handleClearCart}
            />
          </div>
          <PaystackButton
            text="Checkout"
            className="flex my-5 text-white bg-orange-400 rounded-md m-auto w-5/6 h-10 justify-center items-center cursor-pointer"
            {...paystackConfig}
            onSuccess={handlePaystackSuccess}
            onClose={handlePaystackClose}
          />
        </>
      ) : (
        <p className="text-center text-lg py-14">Your cart is empty.</p>
      )}
    </div>
  );
}

// import React, { useContext } from "react";
// import CartContext from "../context/Cart";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import sneaks from "../images/image-product-1.jpg";
// import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


 
// export default function CartPage() {
//   const { inCart: count, handleClearCart } = useContext(CartContext);
//   const config = {
//     public_key: 'FLWPUBK_TEST-dfbf354483fd94df950ceffde17a0e36-X',
//     tx_ref: Date.now(),
//     amount: 125,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'ibiyemideborah@gmail.com',
//       phone_number: '08141685245',
//       name: 'Mo',
//     },
//     customizations: {
//       title: 'My store',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: 'Pay with Flutterwave!',
//     callback: (response) => {
//        console.log(response);
//       closePaymentModal() // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return (
//     <div className="w-80 h-50  ">
//       <div className="border-b-2 w-full">
//         <h1 className="text-2xl font-bold ml-3 mb-4 ">Cart</h1>
//       </div>
//       {count > 0 ? (
//         <>
//           <div className=" text-lg flex mt-5 px-3 items-center justify-center gap-5 ">
//             <img
//               className="object-scale-down w-3/12 md:rounded-sm "
//               src={sneaks}
//               alt="img"
//             />
//             <div className="text-gray-400 ">
//               <p>Fall Limited Edition Sneakers</p>
//               <p>
//                 {" "}
//                 $125.00 * {count}{" "}
//                 <strong className="text-black">
//                   ${125.0 * (count || 1)}.00{" "}
//                 </strong>
//               </p>
//             </div>
//             <FontAwesomeIcon icon={faTrashCan} onClick={handleClearCart} />
//           </div>
//           <FlutterWaveButton {...fwConfig} />
//           <button className="flex my-5 text-white bg-orange-400 rounded-md m-auto w-5/6 h-10 justify-center items-center cursor-pointer">
//             Checkout
//           </button>
//         </>
//       ) : (
//         <p className="text-center text-lg py-14">Your cart is empty.</p>
//       )}
//     </div>
//   );
// }