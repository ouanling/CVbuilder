import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, writeUserData } from "../firebase";
import { query, collection, getDocs, where, addDoc, setDoc, doc } from "firebase/firestore";
import Login from "./Login";



function Nav() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");


  

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);
  return (
    <div>
    { (user) && <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div><strong>{name}</strong></div>
         <div><u>{user?.email}</u></div>
         <button className="dashboard__btn" onClick={() => logout(user.uid)}>
         {/* <button className="dashboard__btn" onClick={() => writeUserData(user?.uid)}> */}
          Logout
         </button>
         </div>
         </div> }
         {(!user) && <Login/>}
         </div>
      
    
  );
}
export default Nav;