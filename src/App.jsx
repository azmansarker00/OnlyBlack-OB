import React, { useContext } from "react";

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
import Deshboard from "./pages/Admin//deshboard/Deshboard";
import Productinfo from "./pages/product info/Product_info";
import Settings from "./pages/settings/Settings";
import Services from "./pages/services/services";
import Wishlist from "./pages/wishList/WishList";

//Context
import MyContext from "./context/data/MyContext";

// Toastify
import { ToastContainer } from "react-toastify";
import Addproduct from "./pages/Admin/ProductPages/Addproduct";
import Updateproducts from "./pages/Admin/productPages/Updateproducts";

const App = () => {
  return (
    <MyState>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/deshboard"
          element={
            <ForEditorOrAdmin>
              <Deshboard />
            </ForEditorOrAdmin>
          }
        />

        <Route path="/settings" element={<Settings />} />

        <Route path="/privacy&terms" element={<PrivacyTerms />} />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route
          path="/profile"
          element={
            <ForUser>
              <Profile />
            </ForUser>
          }
        />

        <Route
          path="/orders/:id"
          element={
            <ForUser>
              <Orders />
            </ForUser>
          }
        />

        <Route path="/singlepage/:id" element={<Productinfo />} />

        <Route
          path="/addproducts"
          element={
            <ForEditorOrAdmin>
              <Addproduct />
            </ForEditorOrAdmin>
          }
        />

        <Route
          path="/updateproducts"
          element={
            <ForEditorOrAdmin>
              <Updateproducts />
            </ForEditorOrAdmin>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SingUp />} />

        <Route
          path="/wishlist"
          element={
            <ForUser>
              <WishList />
            </ForUser>
          }
        />

        <Route path="/shop" element={<Shop />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </MyState>
  );
};

export default App;

{
  /*protect routes8*/
}

// For unauthenticated users
export const ForUser = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

// By admin/editor roles
export const ForEditorOrAdmin = ({ children }) => {
  const context = useContext(MyContext);
  const { rules } = context;
  const userRules = rules;
  if (userRules && (userRules === "admin" || userRules === "editor")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
