import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <>
      <div className="app_container">
        <Navbar />
        <Routes>
          <Route path="/" element={<h2>Product</h2>} />
          <Route path="/add" element={<h2>Add Product</h2>} />
          <Route path="/update" element={<h2>Update Product</h2>} />
          <Route path="/logout" element={<h2>Logout</h2>} />
          <Route path="/profile" element={<h2>Profile</h2>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
