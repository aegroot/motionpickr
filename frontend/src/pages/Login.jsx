import React, { useState } from "react";
// import "../styles/MainStyles.scss";
// import "../styles/registerSheet.css";
// import "../styles/login.scss";
import axios from "axios";
import Register from "./Register";

export default function Login() {
  const [auth, setAuth] = useState(sessionStorage.getItem("access_token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let authBody = { email: email, password: password };
    console.log(authBody);

    let authResp = await axios.post(
      "http://localhost:8080/api/v1/auth/authenticate",
      authBody
    );
    console.log(authResp.data);

    sessionStorage.setItem("access_token", authResp.data.access_token);
    sessionStorage.setItem("user_email", email);

    setAuth(sessionStorage.getItem("access_token"));
    emptyForm();
  };

  const emptyForm = () => {
    window.location.reload(false);
  };

  if (!auth) {
    return (
      <div className="login-container">
        <div>
          <form onSubmit={handleSubmit}>
            <h2> Sign in </h2>
            <div className="label-container">
              <div>
                <label htmlFor="email" id="email-label">
                  Enter e-mail:
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" id="password-label">
                  Enter password:
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(ev) => {
                    setPassword(ev.target.value);
                  }}
                />
              </div>
              <button className="btn btn--stretched" type="submit">
                login
              </button>
            </div>
          </form>
        </div>
        <div>
          <Register />
        </div>
      </div>
    );
  }
}
