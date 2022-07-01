import React, { useEffect, useState } from "react";
import Register from "./Register";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [create, setCreate] = useState("yes");

  return (
    <div>
    { (create === "yes") && <div className="login">
      <div className="login_container">
        <input
          type="text"
          className="login_textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="password"
          className="login_textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="login_buttons">
          <button
            className="login_btc"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className="login_btc login_google" onClick={signInWithGoogle}>
            Login with Google
          </button>
        </div>
        <div onClick={() => setCreate("no")}><strong>Register</strong></div>
      </div>
    </div>}
    {(create === "no")  && <Register />}
    </div>
  );
}
export default Login;