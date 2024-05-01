import React from "react";
import { dataPopulerProduct } from "../../mocks/dataProduct";

export default function DetailProduct() {
  //   const { id } = useParams();

  const [activeImg, setActiveImg] = React.useState(
    dataPopulerProduct[0].img[0]
  );
  return (
    <div className="flex flex-col py-10   md:flex-row">
      {/* left */}
      <div className="flex flex-col justify-center md:gap-9 items-center md:w-1/2">
        <div className="p-16  md:max-h-[500px] md:h-[500px] ">
          <img
            src={activeImg}
            alt="fani"
            className=" h-[300px] md:h-full w-full  object-cover"
          />
        </div>

        <div className="flex w-full justify-center">
          {dataPopulerProduct[0].img.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              className="w-16 md:w-24 h-16 md:h-24  cursor-pointer"
              onClick={() => setActiveImg(item)}
            />
          ))}
        </div>
      </div>
      {/* right */}
    </div>
  );
}
