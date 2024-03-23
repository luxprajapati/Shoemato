import React, { useContext } from "react";
import HomeSec1 from "../components/HomeSec1";
import ProductListLayout from "../components/ProductListLayout";
import AppContext from "../context/AppContext";
import { HomeSec2 } from "../components/HomeSec2";
import { HomeSec3 } from "../components/HomeSec3";
import { HomeSec4 } from "../components/HomeSec4";
import { Footer } from "../components/Footer";

const Home = () => {
  const { showProductList } = useContext(AppContext);
  return (
    <div>
      <div
        id="productList"
        className={` ${showProductList ? "block" : "hidden"}`}
      >
        <ProductListLayout></ProductListLayout>
      </div>

      <HomeSec1></HomeSec1>
      <HomeSec2></HomeSec2>
      <HomeSec3></HomeSec3>
      <HomeSec4></HomeSec4>
      <Footer></Footer>
    </div>
  );
};

export default Home;
