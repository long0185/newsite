import React from "react";
import Carousel from "../../Carousel";
export default function ProductIRego() {
  return (
    <div className="w-100 position-relative product-banner">
      <Carousel
        imgs={[
          "/assets/2560/product/irego/thum_1.png",
          "/assets/2560/product/irego/thum_2.png",
        ]}
        banners={[
          "/assets/2560/product/irecog/banner1.png",
          "/assets/2560/product/irecog/banner1.png",
        ]}
      />
    </div>
  );
}
