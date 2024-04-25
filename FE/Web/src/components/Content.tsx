import React from "react";
import farm from "../assets/farmtowardrobe.png";
import group from "../assets/Group-.png";
import sustanbility from "../assets/sustainability.png";

export default function Content() {
  const content = [
    {
      img: farm,
      title: "Traditional Values / Modern Interpretation",
      description:
        "Bluesville puts Indonesia traditional artisanal values into modern and relevant form of clothing, utilizing traditional techniques such as using Plant-Based Dyes, Batik, and Handweaving",
    },
    {
      img: group,
      title: "Farm-To-Wardrobe",
      description:
        "We're self-sufficient in indigo dye because we grow our own crop, make our own paste, and develop our own dye.",
    },
    {
      img: sustanbility,
      title: "Sustainable cycle",
      description:
        "We thrive in our sustainable practices to provide you high-quality and long lasting garments. We invite you to investing in a long lasting garment that created from handmade and natural plant-based material.",
    },
  ];
  return (
    <div className="content py-14 md:py-40 bg-bgBluesvile flex flex-col md:flex-row gap-9 justify-center items-center">
      {content.map((item, index) => (
        <div key={index} className="px-10 text-center">
          <div className="mb-6 h-20 w-20 mx-auto">
            <img src={item.img} alt="" />
          </div>
          <h4 className="text-xl font-bold text-neutralDGray h-16 my-auto">
            {item.title}
          </h4>
          <p className="text-sm text-neutralGrey">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
