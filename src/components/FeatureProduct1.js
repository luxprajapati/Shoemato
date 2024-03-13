import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { FeaturedProductCard } from "./FeaturedProductCard";

export const FeatureProduct1 = () => {
  const { offerTime } = useContext(AppContext);
  return (
    <FeaturedProductCard
      title="Jumpman MVP Shoes"
      originalPrice="200"
      discountedPrice="180"
      imageUrl="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33220c81-c71e-4b20-b39d-db46c56f4e85/jumpman-mvp-shoes-JV1HCs.png"
      offerTime={offerTime}
    ></FeaturedProductCard>
  );
};
