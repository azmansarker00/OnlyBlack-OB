import React from "react";

// rect router
import { Navigate, Route, Routes } from "react-router-dom";

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
import Deshboard from "./pages/Admin/deshboard/deshboard";



const App = () => {
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/deshboard" element={<ForEditorOrAdmin><Deshboard /></ForEditorOrAdmin>} />

        <Route path="/privacy&terms" element={<PrivacyTerms/>} />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route path="/profile" element={<ForUser><Profile /></ForUser>} />

        <Route path="/orders/:id" element={<ForUser><Orders /></ForUser>} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SingUp />} />

        <Route path="/wishlist" element={<ForUser><WishList /></ForUser>} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />
        
        <Route path="*" element={<NoPage />} />
      </Routes>
    </MyState>
  );
};

export default App;




// protect routes

// by user
export const ForUser = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  }
  else {
    return <Navigate to="/login" />;
  }
};


// by admin / editor
export const ForEditorOrAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && (user.user.email === "azmansarker861@gmail.com" || user.user.rules === "editor")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
