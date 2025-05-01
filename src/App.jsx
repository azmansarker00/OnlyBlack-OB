import React from "react";

// rect router
import { Route, Routes } from "react-router-dom";

// context
import MyState from "./context/data/MyState";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contect";
import Orders from "./pages/orders/Orders";
import NoPage from "./pages/no page/Nopage";
import PrivacyPolicy from "./pages/privacy policy/privacy_policy";
import PrivacyTerms from "./pages/privacy & terms/privacy_&_terms";
import Profile from "./pages/profile/Profile";
import Login from "./pages/registration/login/Login";
import SingUp from "./pages/registration/singup/singup";
import WishList from "./pages/wishList/WishList";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";



const App = () => {
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/nopage" element={<NoPage />} />
        <Route path="/privacy&terms" element={<PrivacyTerms/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </MyState>
  );
};

export default App;



