import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signup/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login/Login";
import AddProduct from "./components/addProduct/AddProduct";

function App() {
  return (
    <>
      <div className="app_container">
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h2>Product</h2>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h2>Update Product</h2>} />
            <Route path="/logout" element={<h2>Logout</h2>} />
            <Route path="/profile" element={<h2>Profile</h2>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
