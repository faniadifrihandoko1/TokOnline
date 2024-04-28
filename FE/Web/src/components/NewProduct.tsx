import React from "react";
import { dataNewProduct } from "../mocks/dataProduct";
import formatCurrency from "../utils/ConvertMoney";

export default function NewProduct() {
  return (
    <section className="px-5 my-10">
      <h1 className="text-3xl font-bold italic text-fontColorBlueSky">
        New Items
      </h1>
      <p className="text-sm text-gray-700 mt-1">For all gender styles</p>
      <div className="flex  justify-center   mx-auto relative ">
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-2 ">
          {/* CARD */}
          {dataNewProduct.map((item, index) => (
            <div className="rounded-lg " key={index}>
              <div className="p-5 flex flex-col justify-center items-center relative">
                {/* sale */}
                <div
                  className={`bg-sale px-2 py-1 text-white absolute top-6 left-0 md:top-14 md:left-5 1 ${
                    item.isReady ? "hidden" : "block"
                  }`}
                >
                  <h1>Out Of Stock</h1>
                </div>
                {/* sale */}
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div className="title-product h-[10%] text-xl font-semibold text-gray-900 mb-3 ">
                  <h1>{item.title}</h1>
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
      </div>
    </section>
  );
}
