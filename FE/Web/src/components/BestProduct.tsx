import React from "react";
import blackTees from "../assets/imageProduct/Home-Black-Tees-1-433x514.jpg";
import whiteTees from "../assets/imageProduct/White-Basic-Slub-Organic-T-shirt-1-433x514.png";
import VestGuard from "../assets/imageProduct/Navy-HBT-Guard-Vest-1-433x514.jpg";
import navyTees from "../assets/imageProduct/Terra-Firma-Navy-Tees-1-433x514.jpg";
import batikblue from "../assets/imageProduct/batik-blue.jpg";
import tshirtNavy from "../assets/imageProduct/tshirt-navy.jpg";
import tshirtJet from "../assets/imageProduct/tshirt-jet-black.jpg";
import glyphy from "../assets/imageProduct/Glyph-Navy-Tshirt-1-433x514.jpg";
import formatCurrency from "../utils/ConvertMoney";

const dataBestProduct = [
  {
    img: blackTees,
    title: "Black Tee",
    price: 80000,
    disc: 70000,
    isDisc: true,
  },
  {
    img: whiteTees,
    title: "White Tee",
    price: 80000,
    disc: 60000,
    isDisc: true,
  },
  {
    img: VestGuard,
    title: "Vest Guard",
    price: 80000,
    disc: 50000,
    isDisc: true,
  },
  {
    img: navyTees,
    title: "Navy Tee",
    price: 80000,
    disc: 75000,
    isDisc: true,
  },
  {
    img: batikblue,
    title: "Batik Blue",
    price: 120000,
    disc: 100000,
    isDisc: true,
  },
  {
    img: tshirtNavy,
    title: "T-Shirt Navy",
    price: 150000,
    disc: 120000,
    isDisc: true,
  },
  {
    img: tshirtJet,
    title: "T-Shirt Jet Black",
    price: 125000,
    disc: 110000,
    isDisc: true,
  },
  {
    img: glyphy,
    title: "Glyphy",
    price: 120000,
    disc: 100000,
    isDisc: true,
  },
];
function BestProduct() {
  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold italic text-fontColorBlueSky">
        Featured Items
      </h1>
      <p className="text-sm text-gray-700 mt-1">For all gender styles</p>
      <div className="flex  justify-center   mx-auto relative ">
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-2 ">
          {/* CARD */}
          {dataBestProduct.map((item, index) => (
            <div className="rounded-lg " key={index}>
              <div className="p-5 flex flex-col justify-center items-center">
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div className="title-product h-[10%] text-xl font-semibold text-gray-900 mb-3 ">
                  <h1>Black Tee</h1>
                </div>
                <div className="price-product h-[20%]  flex flex-col md:flex-row justify-center items-center md:gap-4 ">
                  <h1
                    className="before-disc line-through"
                    style={{
                      textDecorationThickness: "2px",
                      textDecorationColor: "red",
                    }}
                  >
                    Rp. {formatCurrency(item.price)}
                  </h1>
                  <h1 className="after-disc font-semibold bg-colorDicount text-white px-1">
                    Rp. {formatCurrency(item.disc)}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* sale */}
        {/* <div className="bg-sale px-2 py-1 text-white absolute top-10 left-0">
          <h1>Sale!</h1>
        </div>
        <div className="image-product h-[70%]">
          <img src={blackTees} alt="blackTees" />
        </div>
        <div className="title-product h-[10%] text-xl font-bold text-gray-900">
          <h1>Black Tee</h1>
        </div>
        <div className="price-product h-[20%]  flex flex-col gap-1 ">
          <h1
            className="before-disc line-through"
            style={{
              textDecorationThickness: "2px",
              textDecorationColor: "red",
            }}
          >
            Rp. 100.000
          </h1>
          <h1 className="after-disc bg-colorDicount text-white">Rp. 80.000</h1>
        </div> */}
      </div>
    </div>
  );
}

export default BestProduct;
