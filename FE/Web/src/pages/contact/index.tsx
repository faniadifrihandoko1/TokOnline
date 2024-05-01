import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <section className="h-screen ">
      <Navbar />
      <div className="container mx-auto pt-16">
        <div id="contact" className="mx-24 my-14 p-10 border-2 border-gray-300">
          <h1 className="text-2xl text-blue-700 pb-8">Contact us</h1>

          <p className="pb-8 text-justify text-gray-900">TOKONLINE HQ</p>
          <p className="pb-8 text-justify text-gray-500">
            Discovery Jl. Veteran, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota
            Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110{" "}
          </p>
          <p className="pb-8 text-justify text-gray-500">
            Visit to our HQ is by appointment only. Please contact us before any
            visit through our contact channel below.{" "}
          </p>
          <p className="pb-8 text-justify text-gray-500">
            All enquiries:{" "}
            <a href="http://" className="text-blue-700">
              INFO@TOKONLINE.COM
            </a>{" "}
            +628111 0099 82 LINE: @bluesville
          </p>
          <p className="pb-8 text-justify text-gray-500">
            Online Customer Care Business hours: Monday to Friday (11AM – 6PM){" "}
          </p>
          <p className="pb-8 text-justify text-gray-500">
            Please contact us through details above for all enquiries including
            custom made orders, collaborations and projects.
          </p>
          <p className="pb-8 text-justify text-gray-500">
            Wholesale Inquiries:
            <a href="http://" className="text-blue-700">
              azra@gmail.com
            </a>
            ,{" "}
            <a href="http://" className="text-blue-700">
              fani@gmail.com
            </a>
            ,{" "}
            <a href="http://" className="text-blue-700">
              dipa@gmail.com
            </a>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
