import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfiq";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfiq";

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

  return (
    <MyContext.Provider value={{ rules, handleRoleChange, user }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
