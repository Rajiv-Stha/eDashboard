import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  return (
    <div className={styles.navbar}>
      <h2 className={styles.nav_header}>dashboard</h2>
      <ul className={styles.nav_ul}>
        <li>
          <Link to={"/"}>Product</Link>
        </li>
        <li>
          <Link to={"/add"}>Add Product</Link>
        </li>
        <li>
          <Link to={"/update"}>Updata Product</Link>
        </li>
        <li>
          <Link to={"/profile"}>profile</Link>
        </li>
        <li>
          {auth ? (
            <Link to={"/logout"}>Logout</Link>
          ) : (
            <Link to={"/signup"}>SignUp</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
