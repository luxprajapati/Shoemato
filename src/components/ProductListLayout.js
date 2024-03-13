import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductListLayout.css";
// import AppContext from "../context/AppContext";

const ProductListLayout = () => {
  // const { productCard, setProductCard } = useContext(AppContext);

  return (
    <div
      id="productListCard"
      className="w-full mx-auto bg-customeWhite absolute z-40"
    >
      <div className="w-8/12 mx-auto  my-4 py-3 flex justify-center gap-x-[160px] items-start">
        <div>
          <div className="font-jost text-xl font-semibold">Feautered</div>
          <div className="text-[16px] text-customeGray flex flex-col gap-y-2 mt-3 font-semibold">
            <div>
              <NavLink>
                <span>New Releases</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Best Seller</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Member Exclusive</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Jordan</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Retro Running</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Running Shoe Finder</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Sustainable Materials</span>
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <div className="font-jost text-xl font-semibold">Jordans</div>
          <div className="text-[16px] text-customeGray flex flex-col gap-y-2 mt-3 font-semibold">
            <div>
              <NavLink>
                <span>All Jordan</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>New Jordan</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Jordan Shoes</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Jordan Clothing</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Jordan Basketball</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Jordan Lifestyle</span>
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <div className="font-jost text-xl font-semibold">Shop by Sport</div>
          <div className="text-[16px] text-customeGray flex flex-col gap-y-2 mt-3 font-semibold">
            <div>
              <NavLink>
                <span>Running</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Basketball</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Football</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Golf</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Tennis</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Gym & Training</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Yoga</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Skateboarding</span>
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <div className="font-jost text-xl font-semibold">Shop by Brand</div>
          <div className="text-[16px] text-customeGray font-jost flex flex-col gap-y-2 mt-3 font-semibold">
            <div>
              <NavLink>
                <span>Nike</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Addidas</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Reebok</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Puma</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Campus</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Speed</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Bacca Bucci</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListLayout;
