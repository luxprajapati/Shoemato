import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { sportShopping } from "../data";
import { LuArrowBigRightDash } from "react-icons/lu";

export const HomeSec4 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {/* Sport Shop Card 1 */}
          <div className="p-2 font-jost">
            <NavLink to={sportShopping[0].commonShopLink}>
              <img
                className="rounded"
                src={sportShopping[0].image}
                alt="sports-img"
              ></img>
              <div className="mt-4">
                <h3 className="font-semibold text-xl">
                  {sportShopping[0].name}
                </h3>
                <h4 className="text-lg font-medium">
                  {sportShopping[0].description}
                </h4>
              </div>
              <div className="mt-5 font-semibold">
                <NavLink to={sportShopping[0].commonShopLink}>
                  <button className="text-md underline">Shop</button>
                </NavLink>
              </div>
            </NavLink>
          </div>
          {/* Sport Shop Card 2 */}
          <div className="p-2 font-jost">
            <NavLink to={sportShopping[1].commonShopLink}>
              <img
                className="rounded"
                src={sportShopping[1].image}
                alt="sports-img"
              ></img>
              <div className="mt-4">
                <h3 className="font-semibold text-xl">
                  {sportShopping[1].name}
                </h3>
                <h4 className="text-lg font-medium">
                  {sportShopping[1].description}
                </h4>
              </div>
              <div className="mt-5 font-semibold">
                <NavLink to={sportShopping[1].commonShopLink}>
                  <button className="text-md underline">Shop</button>
                </NavLink>
              </div>
            </NavLink>
          </div>
          {/* Sport Shop Card 3 */}
          <div className="p-2 font-jost">
            <NavLink to={sportShopping[2].commonShopLink}>
              <img
                className="rounded"
                src={sportShopping[2].image}
                alt="sports-img"
              ></img>
              <div className="mt-4">
                <h3 className="font-semibold text-xl">
                  {sportShopping[2].name}
                </h3>
                <h4 className="text-lg font-medium">
                  {sportShopping[2].description}
                </h4>
              </div>
              <div className="mt-5 font-semibold">
                <NavLink to={sportShopping[2].commonShopLink}>
                  <button className="text-md underline">Shop</button>
                </NavLink>
              </div>
            </NavLink>
          </div>
          {/* Sport Shop Card 4 */}
          <div className="p-2 font-jost">
            <NavLink to={sportShopping[3].commonShopLink}>
              <img
                className="rounded"
                src={sportShopping[3].image}
                alt="sports-img"
              ></img>
              <div className="mt-4">
                <h3 className="font-semibold text-xl">
                  {sportShopping[3].name}
                </h3>
                <h4 className="text-lg font-medium">
                  {sportShopping[3].description}
                </h4>
              </div>
              <div className="mt-5 font-semibold">
                <NavLink to={sportShopping[3].commonShopLink}>
                  <button className="text-md underline">Shop</button>
                </NavLink>
              </div>
            </NavLink>
          </div>
          {/* Sport Shop Card 5 */}
          <div className="p-2 font-jost">
            <NavLink to={sportShopping[4].commonShopLink}>
              <img
                className="rounded"
                src={sportShopping[4].image}
                alt="sports-img"
              ></img>
              <div className="mt-4">
                <h3 className="font-semibold text-xl">
                  {sportShopping[4].name}
                </h3>
                <h4 className="text-lg font-medium">
                  {sportShopping[4].description}
                </h4>
              </div>
              <div className="mt-5 font-semibold">
                <NavLink to={sportShopping[4].commonShopLink}>
                  <button className="text-md underline">Shop</button>
                </NavLink>
              </div>
            </NavLink>
          </div>
        </Carousel>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row mt-7 gap-x-3 w-full justify-center items-center bg-orange-500 h-[140px]">
        <div className="font-jost uppercase text-2xl font-bold text-center text-white">
          Join Shoemato & Get 15% Off
        </div>
        <button className="ml-5 py-3 px-4 shadow-[5px_5px_0px_0px_rgba(255,255,255,100)] font-jost uppercase text-md font-bold bg-black text-white">
          <NavLink to="#">
            <div className="flex  justify-center items-center gap-x-2">
              Sign Up For Free
              <LuArrowBigRightDash />
            </div>
          </NavLink>
        </button>
      </div>
    </div>
  );
};
