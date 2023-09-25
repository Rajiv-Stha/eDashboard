import React, { useState } from "react";
import styles from "./addProduct.module.css";
import axios from "axios";

const AddProduct = () => {
  const [error, setError] = useState(false);
  let userId = JSON.parse(localStorage.getItem("user"))._id;

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
    userId: userId,
  });
  const fetching = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/product/add",
        productData
      );
      console.log("this is response", response);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (
      !productData.name ||
      !productData.price ||
      !productData.category ||
      !productData.company
    ) {
      setError(true);
      return false;
    }
    fetching();
    setProductData({
      name: "",
      price: "",
      category: "",
      company: "",
    });
  };
  return (
    <div className={styles.addProduct_container}>
      <h1>add product</h1>
      <form className={styles.form} onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="enter product name"
          name="name"
          onChange={handleInputChange}
          value={productData.name}
        />
        {error && !productData.name && (
          <span className={styles.invalid_input}>Enter valid name!!</span>
        )}

        <input
          type="text"
          placeholder="enter product price"
          name="price"
          onChange={handleInputChange}
          value={productData.price}
        />
        {error && !productData.price && (
          <span className={styles.invalid_input}>Enter valid price!!</span>
        )}
        <input
          type="text"
          placeholder="enter product category"
          name="category"
          onChange={handleInputChange}
          value={productData.category}
        />
        {error && !productData.category && (
          <span className={styles.invalid_input}>Enter valid category!!</span>
        )}
        <input
          type="text"
          placeholder="enter product company"
          name="company"
          onChange={handleInputChange}
          value={productData.company}
        />
        {error && !productData.company && (
          <span className={styles.invalid_input}>Enter valid company!!</span>
        )}
        <button className={styles.submit_btn} type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
