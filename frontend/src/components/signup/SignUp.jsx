import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./signup.module.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const fetching = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        emailData
      );
      // console.log(response, "this is response");
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.message));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  //   console.log(emailData);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailData);
    fetching();
    setEmailData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.signup}>
      <h2>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          name="name"
          value={emailData.name}
        />
        <input
          type="text"
          placeholder="Enter email"
          onChange={handleChange}
          name="email"
          value={emailData.email}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          name="password"
          value={emailData.password}
        />
        <button className={styles.submit_btn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
