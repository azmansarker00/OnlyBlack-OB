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
  onSnapshot,
  QueryDocumentSnapshot,
  addDoc,
  orderBy,
  deleteDoc,
  setDoc,
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

  // Add to cart

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart((prevCart) => [...prevCart, productId]);
    }
  };

  // update and delete product

  const edithandle = (item) => {
    setProducts(item);
  };
  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product updated successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product deleted successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // FAqs
  const [faqs, setFaqs] = useState([]);

  const getfaqstData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "faqs"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const faqsarray = [];
        querySnapshot.forEach((doc) => {
          faqsarray.push({ ...doc.data(), id: doc.id });
        });
        setFaqs(faqsarray);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = getfaqstData();
    return () => unsubscribe && unsubscribe();
  }, []);

  const [faq, setFaq] = useState({
    questions: null,
    answers: null,
  });

  const edithandleFaq = (item) => {
    setFaq(item);
    console.log(item);
  };

  const updateFaq = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "faqs", faq.id), faq);
      toast.success("Faq updated successfully!");
      setTimeout(() => {
        window.location.href = "/"; // or navigate to "/dashboard"
      }, 800);
      setLoading(false);
    } catch (error) {
      console.error("Error updating FAQ:", error);
      setLoading(false);
    }
  };

  // Tesimonials

  const [testimonials, setTestimonials] = useState([]);

  const gettestimonialstData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "testimonials"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const testimonialsarray = [];
        querySnapshot.forEach((doc) => {
          testimonialsarray.push({ ...doc.data(), id: doc.id });
        });
        setTestimonials(testimonialsarray);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = gettestimonialstData();
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
        addToCart,
        updateProduct,
        deleteProduct,
        edithandle,
        faqs,
        faq,
        setFaq,
        edithandleFaq,
        updateFaq,
        testimonials,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
