import React, { useState } from "react";

import styles from "./signup.module.css";
const SignUp = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
