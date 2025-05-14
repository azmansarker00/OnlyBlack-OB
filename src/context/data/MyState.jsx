import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
  Query,
  onSnapshot,
  QueryDocumentSnapshot,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfiq";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfiq";
import { toast } from "react-toastify";

const MyState = (props) => {
  const [rules, setRules] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserRules = async () => {
    try {
      const localUser = JSON.parse(localStorage.getItem("user"));
      const userUID = localUser?.user?.uid;

      if (userUID) {
        const q = query(
          collection(fireDB, "usersInfo"),
          where("uid", "==", userUID)
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("Matched Data:", data);
          setRules(data.rules || "");
        });
      }
    } catch (error) {
      console.error("Error fetching user rules:", error);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      const userRef = doc(fireDB, "usersInfo", userId);
      await updateDoc(userRef, { rules: newRole });
      alert(`User role updated to ${newRole}`);
    } catch (error) {
      console.error("Error updating user role:", error);
      alert("Failed to update user role.");
    }
  };

  const getUserData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "usersInfo"));
      const result = await getDocs(q);

      const usersArray = [];
      result.forEach((docSnap) => {
        usersArray.push({ ...docSnap.data(), id: docSnap.id });
      });

      setUser(usersArray);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserRules();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getUserData();
      } else {
        setUser([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // product add

  const [products, setProducts] = useState({
    title: null,
    price: null,
    originalPrice: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [product, setProduct] = useState([]);

  const addProduct = async () => {
    if (
      !products.title ||
      !products.price ||
      !products.originalPrice ||
      !products.imageUrl ||
      !products.category ||
      !products.description
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Product added successfully!");
      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get products

  const getProductData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const productArray = [];
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = getProductData();
    return () => unsubscribe && unsubscribe();
  }, []);

  return (
    <MyContext.Provider
      value={{
        rules,
        handleRoleChange,
        user,
        setProducts,
        products,
        addProduct,
        product,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
