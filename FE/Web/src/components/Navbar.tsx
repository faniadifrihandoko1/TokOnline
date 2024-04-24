import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import clsx from "clsx";
// import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Story", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <main>
      <nav className="flex justify-between px-5 py-2">
        <div className="flex gap-5 items-center">
          <section className="flex gap-5  items-center">
            <IoSearch className="text-2xl lg:hidden" />
            <HiOutlineUserCircle className="text-3xl lg:hidden" />
          </section>
          {navLinks.map((data, index) => (
            <Link
              key={index}
              to={data.link}
              className=" hidden lg:block font-bold text-gray-400 hover:text-black"
            >
              {data.name}
            </Link>
          ))}
        </div>
        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            open && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex flex-col absolute right-0 top-0 h-screen  py-4 px-5 gap-8 z-50 w-3/4">
            {/* buatlah icon iomdclose berada dipaling kanan */}
            <div className="flex items-end justify-end">
              <IoMdClose
                onClick={() => setOpen(false)}
                className="text-2xl poin"
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <IoSearch className="text-xl" />
              <HiOutlineUserCircle className="text-2xl" />
              <MdOutlineShoppingCart className="text-xl" />
            </div>
            <hr />
            <div className="flex flex-col gap-5">
              {navLinks.map((data, index) => (
                <Link key={index} to={data.link} className="font-bold text-xl">
                  {data.name}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="flex gap-2  items-center">
          <h1 className="text-2xl">toko online</h1>
        </section>
        <section className="flex gap-5  items-center">
          <IoSearch className="text-2xl hidden lg:block" />
          <HiOutlineUserCircle className="text-3xl hidden lg:block" />
          <MdOutlineShoppingCart className="text-2xl hidden lg:block" />
          <FiMenu
            onClick={() => setOpen(true)}
            className="text-2xl lg:hidden"
          />
        </section>
      </nav>
      <hr />
    </main>
  );
}
