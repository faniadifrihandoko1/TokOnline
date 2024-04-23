
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
// import "./index.css";
import "tailwindcss/tailwind.css";
import Login from "./pages/auth/login/index.tsx";
import Register from "./pages/auth/register/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  </Router>
);
