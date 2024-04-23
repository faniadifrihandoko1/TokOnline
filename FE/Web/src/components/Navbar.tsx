import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between px-5 py-2">
      <section className="flex gap-5  items-center">
        <IoSearch className="text-2xl" />
        <HiOutlineUserCircle className="text-3xl" />
      </section>
      <section className="flex gap-2  items-center">
        <h1 className="text-2xl">toko online</h1>
      </section>
      <section className="flex gap-5  items-center">
        <MdOutlineShoppingCart className="text-2xl" />
        <FiMenu className="text-2xl" onClick={toggleMenu} />
      </section>
      {isMenuOpen && (
        <div className="absolute top-14 right-0 bg-white p-2">
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </nav>
  );
}
