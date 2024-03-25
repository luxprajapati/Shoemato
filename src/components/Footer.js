import React from "react";
import { NavLink } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col font-jost md:flex-row lg:flex-row xl:flex-row justify-between items-start bg-black text-white md:p-14 lg:p-14 xl:p-14">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:gap-x-16 lg:gap-x-16 xl:gap-x-16 justify-center mx-auto md:mx-0 lg:mx-0 xl:mx-0">
          {/* Left duv */}

          <div className="uppercase text-[14px] font-semibold">
            <NavLink>
              <p className="mb-3">Find A Store</p>
            </NavLink>
            <NavLink>
              <p className="mb-3">Become a Member</p>
            </NavLink>
            <NavLink>
              <p className="capitalize mb-3">Send us Feedback</p>
            </NavLink>
          </div>

          <div>
            <p className="uppercase text-[14px]">Help</p>
            {[
              { name: "Get Help", link: "" },
              { name: "Order Status", link: "" },
              { name: "Delivery", link: "" },
              { name: "Returns", link: "" },
              { name: "Payment Options", link: "" },
              { name: "Contact us on shoemato inquires", link: "" },
              { name: "Contact us on All other inquires", link: "" },
            ].map((item, index) => (
              <NavLink to={item.link}>
                <p
                  key={index}
                  className="capitalize text-[13px] text-customeGray hover:text-white my-1"
                >
                  {item.name}
                </p>
              </NavLink>
            ))}
          </div>

          <div>
            <p className="uppercase text-[14px]">Company</p>
            {[
              { name: "About Shoemato", link: "" },
              { name: "News", link: "" },
              { name: "Careers", link: "" },
              { name: "Investors", link: "" },
              { name: "Sustainability", link: "" },
            ].map((item, index) => (
              <NavLink to={item.link}>
                <p
                  key={index}
                  className="capitalize text-[13px] text-customeGray hover:text-white my-1"
                >
                  {item.name}
                </p>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex gap-x-2 my-3 mx-auto  md:mx-0 lg:mx-0 xl:mx-0 md:my-0 lg:my-0 xl:my-0 ">
          {[
            { icon: <BsTwitterX />, link: "https://twitter.com" },
            { icon: <FaInstagramSquare />, link: "https://instagram.com" },
            { icon: <TfiYoutube />, link: "https://youtube.com" },
            { icon: <BsDiscord />, link: "https://discord.com" },
          ].map((item, index) => (
            <NavLink to={item.link} key={index}>
              <p
                className="text-xl bg-customeWhite p-2 rounded-full text-customeGray hover:text-black
                transition-all duration-500 ease-in-out my-1"
              >
                {item.icon}
              </p>
            </NavLink>
          ))}
        </div>
      </div>

      <hr></hr>
      <div>
        <p className="text-center text-customeGray text-[13px] py-2 bg-black">
          &copy; 2024 Shoemato. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
