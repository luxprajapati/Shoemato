import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/AppContext";

export const HomeSec3 = () => {
  const { trendingImg } = useContext(AppContext);
  return (
    <div className="p-9">
      <div className="text-3xl font-jost uppercase font-semibold select-none">
        Trending
      </div>
      <NavLink>
        <div className="w-[90px] h-[2px] bg-orange-500 mb-6 translate-x-1"></div>
        <div>
          <img
            className="rounded select-none w-full"
            src={trendingImg}
            alt="Trending Product"
          ></img>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center mt-16 select-none mx-auto">
          <div className="font-jost font-medium text-center capitalize">
            Just in
          </div>
          <div className=" flex text-center justify-center items-center mx-auto uppercase  text-[42px] mb-3 font-extrabold font-jost -translate-y-4 responsiveOG">
            AJ1 High OG 'BLACK & WHITE'
          </div>
          <div className="font-jost font-medium text-center">
            Suit up and show up in this iconic colorway. Inspired by MJ’s all
            business attitude, you’re ready to make moves.
          </div>
          <button className="bg-black text-white hover:bg-orange-600 rounded-sm font-semibold text-lg font-jost transition-all duration-500 px-5 py-1 mt-3">
            Shop
          </button>
        </div>
      </NavLink>
    </div>
  );
};
