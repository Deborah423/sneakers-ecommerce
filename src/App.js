import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { CartProvider} from "./context/Cart";

function App() {
  return (
   <div>
   <CartProvider>
      <Navbar/>
      <Main />
   </CartProvider>
   </div>
    
  );
}

export default App;
