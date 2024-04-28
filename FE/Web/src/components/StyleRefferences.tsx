import React from "react";
import style1 from "../assets/styleContent/Gudang-Boys-088-scaled.jpg";
import style2 from "../assets/styleContent/Gudang-Boys-098-scaled.jpg";
import style3 from "../assets/styleContent/Gudang-Boys-139-scaled.jpg";

const dataReferences = [
  {
    id: 1,
    img: style1,
  },
  {
    id: 2,
    img: style2,
  },
  {
    id: 3,
    img: style3,
  },
];

export default function StyleRefferences() {
  return (
    <figure className="my-10">
      <div className="flex  justify-center   mx-auto relative  md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3  bg ">
          {dataReferences.map((item, index) => (
            <div className="rounded-lg " key={index}>
              <img
                src={item.img}
                alt=""
                className="brightness-75 md:brightness-[0.5]"
              />
            </div>
          ))}
        </div>
        <h1 className="text-6xl font-bold md:top-52 lg:top-80 absolute text-white hidden md:block">
          Style References
        </h1>
      </div>
    </figure>
  );
}
