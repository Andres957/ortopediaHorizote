import NavBar from "./Components/NavBar/NavBar";
/*import "./index.css";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    
  );
}

export default App;
