import React from "react";
import dataCarousel from "../mocks/dataCarousel";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const handleNext = () => {
    if (currentIndex < dataCarousel.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(dataCarousel.length - 1);
    }
  };
  return (
    <div className="flex w-full h-full justify-center relative group">
      <div
        style={{ backgroundImage: `url(${dataCarousel[currentIndex].img})` }}
        className="w-full h-[600px] md:h-screen bg-cover bg-center duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 rounded-full translate-y-[50%] left-1 md:left-5 text-2xl bg-black/20 p-2 cursor-pointer text-white">
        <MdOutlineArrowBackIosNew onClick={handlePrev} size={25} className="" />
      </div>
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 rounded-full translate-y-[50%] right-1 md:right-5 text-2xl bg-black/20 p-2 cursor-pointer text-white">
        <MdOutlineArrowForwardIos onClick={handleNext} size={25} className="" />
      </div>
    </div>
  );
}
