import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const auth = localStorage.getItem("user");
    console.log("login changing", auth);
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { status, data } = await axios.post(
        "http://localhost:8000/api/login",
        loginData
      );
      console.log(data);
      if (status === 200) {
        localStorage.setItem("user", JSON.stringify(data.message));
        navigate("/");
      } else {
        console.error("wrong credentials");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="enter email"
            onChange={handleInputChange}
            name="email"
            value={loginData.email}
          />
          <input
            type="password"
            placeholder="enter password"
            onChange={handleInputChange}
            name="password"
            value={loginData.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
