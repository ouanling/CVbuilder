import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { initializeApp } from "firebase/app";
import { placehold } from "./placeholder";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  updateDoc,
  where,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNGIs9JMRWvQYqGCefx8jFdaa3_3pTKGU",
  authDomain: "cv-creator-77db2.firebaseapp.com",
  projectId: "cv-creator-77db2",
  storageBucket: "cv-creator-77db2.appspot.com",
  messagingSenderId: "570747797740",
  appId: "1:570747797740:web:5681ce01ce515f39bc25c9",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      writeUserData(user.uid, placehold);
      console.log("envoye sur firebase");
    }
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    writeUserData(user.uid, placehold)
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

const writeUserData = async (userId, data) => { 
    await setDoc(doc(db, "datasave", userId), {
       data
      });}

const updateUserData = async (userId, data) => { 
        await updateDoc(doc(db, "datasave", userId), {
           data
          });}
    

const getUserData = async (userId) => {
    const docRef = doc(db, "datasave", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  writeUserData,
  getUserData,
  updateUserData
};
