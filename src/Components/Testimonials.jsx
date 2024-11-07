import React from "react";
import { useState } from "react";
import image1 from "../assets/images/profile-1.jpg";
import image2 from "../assets/images/profile-2.jpg";
import image3 from "../assets/images/profile-3.jpg";
import quote from '../assets/images/bg-quotes.png'
export default function Testimonials() {
  const [cards, setcards] = useState([
    {
      text: "Lorem ipsum . Perspiciatis sit earum dolores repellendus itaque illum!Lorem ipsum dolo Perspiciatis sit earum dolores repellendus itaque illum!",
      name: "mohamed",
      image: image1,
    },
    {
      text: "Lorem ipsum . Perspiciatis sit earum dolores repellendus itaque illum!Lorem ipsum dolo Perspiciatis sit earum dolores repellendus itaque illum!",
      name: "mohamed",
      image: image2,
    },
    {
      text: "Lorem ipsum dolo Perspiciatis sit earum itaque illum!Lorem ipsum dolo Perspiciatis sit earum dolores repellendus itaque illum!",
      name: "mohamed",
      image: image3,
    },
  ]);
  return (
    <div className="container text-white mt-8">
        <img src={quote} alt="" />

      <div className="grid md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div className=" bg-[#222a3dff] pr-9 pb-2 pt-9 ps-9 rounded">
            <p>{card.text}</p>
            <div className="flex justify-start  pt-8 items-center">
              <img className="rounded-full w-9" src={card.image} alt="" />
              <h3 className="ps-5"> {card.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
