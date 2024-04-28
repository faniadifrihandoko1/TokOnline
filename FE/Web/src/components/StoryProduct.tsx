import React from "react";
import content1 from "../assets/imageContent/content1.jpg";

import content4 from "../assets/imageContent/content4.jpg";

export default function StoryProduct() {
  return (
    <figure className="flex flex-col md:flex-row h-screen md:p-10 ">
      <div className="md:w-1/2 ">
        <img src={content1} alt="" className="brightness-50 h-full w-full" />
      </div>

      <div className="md:w-1/2 bg-orange-400 relative">
        <img src={content4} alt="" className="brightness-50 h-full w-full" />
        <div className="absolute bottom-28 md:bottom-10 text-center md:mx-20 md:text-lg  mx-10 text-white">
          <p className="text-justify mb-5 md:font-semibold">
            OUR STORY START WITH THE WORLD BLUE. BLUE IS THE MOST PROMINENT
            COLOR WE CAN SEE IN THE NATURE IF WE LOOK INTO THE HORIZON, THE
            COLOR OF THE SEA BLUE
          </p>
          <h1 className="md:font-bold underline underline-offset-8">
            OUR FULL STORY
          </h1>
        </div>
      </div>
    </figure>
  );
}
