import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FormCheckOut from "./components/FormCheckOut";

export default function CheckOut() {
  return (
    <section className="h-screen pt-16">
      <Navbar />
      <div className="container mx-auto ">
        {/* billing details */}
        <div
          id="billing-details"
          className="mx-24 my-14 p-10 border-2 border-gray-300"
        >
          <form action="" className="">
            <h1 className="text-xl text-gray-700 font-bold">BILLING DETAILS</h1>
            <FormCheckOut label="First Name" />
            <FormCheckOut label="Last Name" />
            <FormCheckOut label="Country / Region" />
            <FormCheckOut label="Province" />
            <FormCheckOut label="Town / City" />
            <FormCheckOut label="District" />
            <FormCheckOut label="Street Address" />
            <FormCheckOut label="Postcode / ZIP" />
            <FormCheckOut label="Phone" />
            <FormCheckOut label="Email address" />
          </form>
        </div>
        {/* billing details */}
        <div
          id="my-order"
          className="mx-24 my-14 p-10 border-2 border-gray-300"
        >
          <div className="mb-12">
            <div className="grid grid-cols-4 gap-4 pb-2">
              <div className="col-span-2">PRODUCT</div>
              <div>QUANTITY</div>
              <div>TOTAL</div>
            </div>
            <div className="mb-8 border-t border-gray-300" />
            {/* order item */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-2">Baju bagus</div>
              <div>x1</div>
              <div>Rp. 799.000</div>
            </div>
            <div className="mb-8 border-t border-gray-300" />
            {/* sub total*/}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-3">SUBTOTAL</div>
              <div>Rp. 799.000</div>
            </div>
            <div className="mb-8 border-t border-gray-300" />
            {/* total item */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-3">TOTAL</div>
              <div>Rp. 799.000</div>
            </div>
            <div className="mb-8 border-t border-gray-300" />
          </div>

          <button className="px-6 py-3 bg-bgFooter hover:bg-blue-600 text-white w-full">
            {" "}
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
