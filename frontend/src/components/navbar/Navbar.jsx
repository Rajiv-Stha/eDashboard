import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate;

  const [user, setUser] = useState()

  useEffect(()=>{
    console.log("changing")
  const auth = localStorage.getItem("user");
  if(auth){
    setUser(auth)
  }
  },[])
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signup");
  };
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
          {user ? (
            <Link onClick={handleLogout} to={"/signup"}>
              Logout
            </Link>
          ) : (
            <Link to={"/signup"}>SignUp</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
