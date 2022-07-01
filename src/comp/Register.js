import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../firebase";

function Register (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };

    return (
        <div className="register">
          <div className="register_container">
            <input
              type="text"
              className="register_textBox"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input
              type="text"
              className="register_textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="register_textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="register_btns">
                <button className="register_btn" onClick={register}>
                  Register
                </button>
                <button
                  className="register_btn register_google"
                  onClick={signInWithGoogle}
                >
                  Register with Google
                </button>
            </div>
            
          </div>
        </div>
      );
    }
    export default Register;

