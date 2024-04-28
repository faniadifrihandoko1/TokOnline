import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bgFooter px-9 md:px-28">
      <div className=" flex flex-col md:flex-row mt-10 z-50  py-10 gap-10 md:gap-0 text-white">
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-semibold">About</h1>
          <ul className="mt-4">
            <li>story</li>
            <li className="mt-2">jurnal</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-semibold">Support</h1>
          <ul className="mt-4">
            <li>How To Order</li>
            <li className="my-2">Customer Care</li>
            <li>Return & Exchange Policy</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 ">
          <h1 className="text-xl font-semibold">Stay Social</h1>
          <div className="mt-4 flex gap-2">
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
        <div className="w-full md:w-1/4 ">
          <h1 className="text-xl font-semibold">Operating Hours</h1>
          <ul className="mt-4 flex flex-col gap-2">
            <li>Monday - Friday</li>
            <li>09:00 - 17:00</li>
            <li>Jalan Kelapa Kopyor Raya</li>
            <li>Blok CE 2 No. 6</li>
            <li>Kelapa Gading - Jakarta Utara</li>
            <li>14240</li>
          </ul>
        </div>
      </div>
      <hr className="border-white my-4" />
      <div className="text-center  py-5">
        <p className="text-white">Copyright © 2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
