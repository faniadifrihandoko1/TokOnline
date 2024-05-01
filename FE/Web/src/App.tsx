import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import Layout from "./layout";
import DetailProduct from "./pages/detailProduct";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/product-detail/:productId" element={<DetailProduct />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    );
}

export default App;
