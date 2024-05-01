import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/auth";
import Home from "./pages/home";
import Layout from "./layout";
import DetailProduct from "./pages/detailProduct";
import Contact from "./pages/contact";
import CheckOut from "./pages/checkout";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product-detail/:productId" element={<DetailProduct />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
}

export default App;
