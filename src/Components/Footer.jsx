import React from "react";
import logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <div className="pt-12 relative text-white mt-11 bg-[#0c1524ff]">
      <div className="w-2/4 absolute left-1/2 top-[-50%] transform -translate-x-1/2 rounded-lg bg-[#1c2230ff] text-center">
        <h1 className="text-center pt-7 text-4xl">Get early access today</h1>
        <p className="pt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          oditadipisicing elit. Assumenda, odit.
        </p>
        <div className="pt-7 pb-7">
          <input
            placeholder="email@example.com"
            className="rounded-full px-24 py-2 mr-6"
            type="text"
          />
          <button className="btn rounded-full px-4 py-[10px]">
            Get Started For Free
          </button>
        </div>
      </div>
      <div className="container text-white">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="grid md:grid-cols-5 gap-6 mt-10 pb-11">
          <div className="">
            <p>
              <i className="fa-solid fa-location-dot pe-3"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            </p>
          </div>
          <div className="">
            <p>
              <i className="fa-solid fa-phone-volume p-3"></i> 01110260022
            </p>
            <p>
              <i className="fa-regular fa-envelope-open p-3"></i> mohamed@gmail.com
            </p>
          </div>
          <div className="flex justify-center">
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-3/6">
              <a href="">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a className="m-5" href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
