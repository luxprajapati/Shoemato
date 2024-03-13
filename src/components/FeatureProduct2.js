import React, { useContext } from "react";
import { FeaturedProductCard } from "./FeaturedProductCard";
import AppContext from "../context/AppContext";

export const FeatureProduct2 = () => {
  const { offerTime } = useContext(AppContext);
  return (
    <FeaturedProductCard
      title="Jordan 1 Mid SE"
      originalPrice="300"
      discountedPrice="230"
      imageUrl="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c8e5d14-c966-4667-9e0e-780796bc4be4/air-jordan-1-mid-se-older-shoes-9GGnz5.png"
      offerTime={offerTime}
    ></FeaturedProductCard>
  );
};
