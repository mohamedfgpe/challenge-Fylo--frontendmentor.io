import React from "react";

export default function FeaturesBox({ icon, desc, title }) {
  return (
    <div className="mt-7 flex justify-center flex-col">
      <div className="w-20 h-20 mx-auto">
        <img src={icon} alt="" className=" w-full text-center" />
      </div>
      <div className=" text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
}
