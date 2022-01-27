import React from "react";
export default function index() {
  return (
    <>
      <div className="product-title irego-title col-12 d-flex align-items-center justify-content-center">
        <div className="position-relative ">
          <img src="/assets/2560/product/iremo/iremo-logo.svg" />
        </div>
      </div>
      <div className="col-12 w-100 mb-32 d-flex align-items-center justify-content-center ">
        <div className="irego-video position-relative w_1021 h_574 ">
          <video controls>
            <source src="/assets/iremo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
