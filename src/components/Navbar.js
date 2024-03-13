import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/BrandLogo.png";
import { IoIosSearch } from "react-icons/io";
import { SlUser } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import "./Navbar.css";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const { setShowProductList } = useContext(AppContext);
  // console.log("SHowProduct==>" + showProductList);

  return (
    <div
      className="flex flex-row justify-between items-center p-2  
     xl:h-[105px] h-[75px] bg-white z-50"
    >
      <div className="xl:hidden pl-3">
        <NavLink to="#">
          <div>
            <HiMiniBars3CenterLeft className="text-3xl"></HiMiniBars3CenterLeft>
          </div>
        </NavLink>
      </div>

      <div className="xl:pl-11 px-3">
        <NavLink to="/">
          <img
            className="xl:w-[170px] lg:w-[170px] md:w-[130px] sm:w-[120px] w-[100px]"
            src={logo}
            alt="Logo"
          />
        </NavLink>
      </div>

      <div className="flex-row gap-x-10 font-semibold text-customeBlack text-[16px] xl:flex  hidden font-jost">
        <div
          onMouseEnter={() => {
            setShowProductList(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setShowProductList(false);
            }, 400);
          }}
          id="men"
        >
          <NavLink to="/men">
            <div className="flex flex-col justify-center items-center">
              <div className="hover-underline-animation px-1">Men</div>
            </div>
          </NavLink>
        </div>
        <div
          onMouseEnter={() => {
            setShowProductList(true);
          }}
          onMouseLeave={() => {
            setShowProductList(false);
          }}
        >
          <NavLink to="/women">
            <div className="hover-underline-animation px-1">Women</div>
          </NavLink>
        </div>
        <div
          onMouseEnter={() => {
            setShowProductList(true);
          }}
          onMouseLeave={() => {
            setShowProductList(false);
          }}
        >
          <NavLink to="/kid">
            <div className="hover-underline-animation px-1">Kids</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/dod">
            <div className="hover-underline-animation px-1">
              Deals of the Day
              <span className="absolute translate-y-[-60%]  translate-x-[-50%] text-[9px] uppercase bg-customeRed px-1 rounded-sm text-white">
                Hot
              </span>
            </div>
          </NavLink>
        </div>
        <div
          onMouseEnter={() => {
            setShowProductList(true);
          }}
          onMouseLeave={() => {
            setShowProductList(false);
          }}
        >
          <NavLink to="/sports">
            <div className="hover-underline-animation px-1">Sports</div>
          </NavLink>
        </div>
        <div
          onMouseEnter={() => {
            setShowProductList(true);
          }}
          onMouseLeave={() => {
            setShowProductList(false);
          }}
        >
          <NavLink to="#">
            <div className="hover-underline-animation px-1">SNKRS</div>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-x-4 text-[16px] pr-3 xl:pr-11">
        <div>
          <NavLink>
            <IoIosSearch className="text-3xl"></IoIosSearch>
          </NavLink>
        </div>
        <div className="hidden xl:block">
          <NavLink>
            <SlUser className="text-2xl"></SlUser>
          </NavLink>
        </div>
        <div className="hidden xl:block">
          <NavLink>
            <FaRegHeart className="text-2xl"></FaRegHeart>
          </NavLink>
        </div>
        <div>
          <NavLink>
            <div className="relavtive">
              <LiaShoppingBagSolid className="text-3xl"></LiaShoppingBagSolid>
              <span className="absolute w-[10px] h-[10px] right-[51px] top-14 rounded-full bg-orange-500 animate-ping hidden">
                {" "}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
