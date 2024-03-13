import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
// import { Tooltip } from "react-tooltip";

export const FeaturedProductCard = ({
  title,
  originalPrice,
  discountedPrice,
  imageUrl,
  offerTime,
}) => {
  return (
    <div className="bg-white font-jost  rounded px-6 py-4 w-[90%] xl:w-[40%] lg:w-[40%] m-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="flex justify-between items-start">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded uppercase font-semibold">
          New
        </span>
      </div>
      <img
        className="mt-4 object-cover w-[80%] md:h-[380px] lg:h-[300px] xl:h-[300px] mx-auto object-center rounded-lg overflow-hidden scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
        src={imageUrl}
        alt="Shoes MT"
      />
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-500 font-jost">
        <span className="line-through text-md"> ${originalPrice}</span>{" "}
        <span className="text-xl text-orange-600 font-semibold">
          ${discountedPrice}
        </span>
      </p>
      <div className="flex flex-row flex-wrap items-center gap-x-3">
        <button
          className="mt-4 py-2 px-4 flex items-center uppercase justify-evenly gap-x-2 text-sm  text-black border border-customeBlack font-jost font-semibold hover:bg-orange-500
        hover:border-orange-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          <BiShoppingBag className="text-[21px]"></BiShoppingBag>
          Add to Cart
        </button>
        <span
          className="mt-4"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Add to Wishlist"
        >
          <button className="py-2 px-3 text-black hover:text-white flex items-center uppercase justify-evenly gap-x-2 text-sm  border border-customeBlack font-jost  hover:bg-orange-500 hover:border-orange-500  transition-all duration-300 ease-in-out">
            <CiHeart className="text-[20px] m-[0.5px] "></CiHeart>
          </button>
        </span>
        <span
          className="mt-4"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Quick View"
        >
          <button className="py-2 px-3 text-black hover:text-white flex items-center uppercase justify-evenly gap-x-2 text-sm  border border-customeBlack font-jost  hover:bg-orange-500 hover:border-orange-500  transition-all duration-300 ease-in-out">
            <IoSearchOutline className="text-[20px] m-[0.5px]"></IoSearchOutline>
          </button>
        </span>
      </div>

      <div
        className="mt-4 border border-red-500 p-2 flex justify-center  items-center  
        xl:gap-x-5 lg:gap-x-5 md:gap-x-5 sm:gap-x-5 gap-x-3
      "
      >
        <h3 className="text-sm flex items-center gap-x-1 font-bold text-red-500">
          <span>
            <WiTime3 className="text-red-500 text-[20px]"></WiTime3>
          </span>
          HUNGRY UP!
        </h3>
        <p className="sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold text-red-500 uppercase text-[10px]">
          {offerTime}
        </p>
      </div>
    </div>
  );
};
