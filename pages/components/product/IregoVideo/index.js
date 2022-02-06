import React from "react";
export default function index() {
  return (
    <>
      <div className="product-title irego-title flex items-center justify-center">
        <div className="position-relative ">
          <img src="/assets/2560/product/irego/irego.svg" />
        </div>
      </div>
      <div className=" w-screen mb-32 flex items-center justify-center ">
        <div className="w_1021 h_574 ">
          <video className="w-100 h-100" controls>
            <source src="/assets/iremo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
