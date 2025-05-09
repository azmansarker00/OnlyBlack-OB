import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfiq";

const MyState = (props) => {
  const [rules, setRules] = useState("");

  const fetchUserRules = async () => {
    try {
      const loginUser = JSON.parse(localStorage.getItem("user"));
      const uid = loginUser?.uid;

      if (!uid) {
        console.warn("No UID found in localStorage");
        return;
      }

      const userDocRef = doc(fireDB, "usersInfo", uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setRules(userData.rules);
        console.log("User rules:", userData.rules);
      } else {
        console.warn("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user rules:", error);
    }
  };

  useEffect(() => {
    fetchUserRules();
  }, []);

  return (
    <MyContext.Provider value={{ rules }}>{props.children}</MyContext.Provider>
  );
};

export default MyState;
