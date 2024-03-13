import React from "react";
import { FeatureProduct1 } from "./FeatureProduct1";
import { FeatureProduct2 } from "./FeatureProduct2";

export const HomeSec2 = () => {
  return (
    <div className="mt-16 mb-5">
      <div className="text-xl flex justify-center items-center uppercase font-extrabold font-jost mb-4">
        Deals of the Day
      </div>
      <div className="flex justify-center items-center mx-auto h-[2px] w-[80px] bg-orange-500 "></div>
      <div className="flex flex-col justify-evenly items-center lg:flex-row xl:flex-row">
        <FeatureProduct1></FeatureProduct1>
        <FeatureProduct2></FeatureProduct2>
      </div>
    </div>
  );
};
