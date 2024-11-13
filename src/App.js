import "./App.css";
import Cart from "./component/cart/Cart";
import Item from "./component/item/Item";
import WishList from "./component/wishlist/wishlist";
import Products from "./component/products/products";
import Header from "./component/header/header";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

export default function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="App">
        <div className="route">
          {location.pathname !== "/cart" && (
            <Link className="cart-button" to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          )}
          {location.pathname !== "/wishlist" && (
            <Link to="/wishlist">
              <i className="fas fa-heart wishlistbutton"></i>
            </Link>
          )}
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<WishList />}></Route>
            <Route path="/item/:id" element={<Item />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
