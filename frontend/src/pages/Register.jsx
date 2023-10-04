import React from "react";
import { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    secondpassword: "",
  });

  const handleLastname = (e) => {
    setUser({
      ...user,
      lastname: e.target.value,
    });
  };

  const handleFirstname = (e) => {
    setUser({
      ...user,
      firstname: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleSecondPassword = (e) => {
    setUser({
      ...user,
      secondpassword: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password === user.secondpassword) {
      console.log("succes");

      const postUser = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        role: "USER",
      };
      console.log(postUser);

      axios.post("http://localhost:8080/api/v1/auth/register", postUser);
    } else alert("passwords dont match!");

    setUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      secondpassword: "",
    });
  };

  return (
    <div>
      <div className="login-container">
        <div>
          <form onSubmit={handleSubmit}>
            <h2> Register </h2>
            <div className="label-container">
              <div>
                <label htmlFor="username-input" value={user.name}>
                  Firstname:
                </label>
                <input
                  type="text"
                  onChange={handleFirstname}
                  value={user.firstname}
                  required
                />
              </div>
              <div>
                <label htmlFor="username-input" value={user.name}>
                  Lastname:
                </label>
                <input
                  type="text"
                  onChange={handleLastname}
                  value={user.lastname}
                  required
                />
              </div>
              <div>
                <label htmlFor="username-input" value={user.name}>
                  E-mail:
                </label>
                <input
                  type="text"
                  onChange={handleEmail}
                  value={user.email}
                  required
                />
              </div>
              <div>
                <label htmlFor="password-input"> Password: </label>
                <input
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  value={user.password}
                  onChange={handlePassword}
                  required
                />
              </div>
              <div>
                <label htmlFor="second-password-input">
                  {" "}
                  Re-enter password:{" "}
                </label>
                <input
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  value={user.secondpassword}
                  onChange={handleSecondPassword}
                  required
                />
                {/* <input type="submit" /> */}
              </div>

              <button className="btn btn--stretched" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
