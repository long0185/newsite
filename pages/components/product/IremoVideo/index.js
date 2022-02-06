import React from "react";
export default function index() {
  return (
    <>
      <div className="product-title irego-title col-12 d-flex align-items-center justify-content-center">
        <div className="position-relative ">
          <img src="/assets/2560/product/iremo/iremo-logo.svg" />
        </div>
      </div>
      <div className=" w-screen mb-32 flex items-center justify-center ">
        <div className="w_1021 h_574 flex items-center justify-center ">
          <video className="" controls>
            <source src="/assets/iremo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
