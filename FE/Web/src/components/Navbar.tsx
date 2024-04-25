import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import clsx from "clsx";
// import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "STORY", link: "/" },
    { name: "SHOP", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex justify-between items-center content-center px-5 py-3 text-black lg:py-4 ${
          isSticky
            ? "sticky top-0 left-0 border-b bg-white duration-300"
            : "md:text-white"
        }`}
      >
        <div className="flex gap-5 items-center">
          <section className="flex gap-5  items-center">
            <IoSearch className="text-2xl lg:hidden" />
            <HiOutlineUserCircle className="text-3xl lg:hidden" />
          </section>
          {navLinks.map((data, index) => (
            <Link
              key={index}
              to={data.link}
              className="text-base font-semibold hidden lg:block   hover:underline hover:underline-offset-8 hover:duration-300 hover:transition-all"
            >
              {data.name}
            </Link>
          ))}
        </div>
        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex flex-col absolute right-0 top-0 h-screen  py-4 px-5 gap-8 z-50 w-3/4">
            <div className="flex items-end justify-end">
              <IoMdClose
                onClick={() => setIsOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <IoSearch className="text-xl cursor-pointer" />
              <HiOutlineUserCircle className="text-2xl cursor-pointer" />
              <MdOutlineShoppingCart className="text-xl cursor-pointer" />
              <h1>[woocs sd=1]</h1>
            </div>
            <hr />
            <div className="flex flex-col gap-5">
              {navLinks.map((data, index) => (
                <Link
                  key={index}
                  to={data.link}
                  className="text-base font-semibold  lg:block  text-gray-800 hover:text-black"
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="flex gap-2  items-center">
          <h1 className="weight-900 text-2xl cursor-pointer">toko online</h1>
        </section>
        <section className="flex gap-5  items-center">
          <IoSearch className="text-2xl hidden lg:block cursor-pointer" />
          <HiOutlineUserCircle className="text-3xl hidden lg:block cursor-pointer" />
          <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
          <h1 className="hidden lg:block">[woocs sd=1]</h1>
          <FiMenu
            onClick={() => setIsOpen(true)}
            className="text-2xl lg:hidden cursor-pointer"
          />
        </section>
      </nav>
      {/* <hr /> */}
    </header>
  );
}
