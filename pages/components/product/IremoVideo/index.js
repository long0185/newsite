import React from "react";
export default function index() {
  const [showVideo, setshowVideo] = React.useState(false);
  return (
    <>
      <div className="product-title irego-title w-100 flex items-center justify-center">
        <div className="relative ">
          <img src="/assets/2560/product/iremo/iremo-logo.svg" />
        </div>
      </div>
      <div className=" w-screen mb-32 flex items-center justify-center ">
        <div className="w_1021 h_574 flex items-center justify-center ">
          <div
            onClick={() => {
              setshowVideo(true);
            }}
            className={`w-100 h-100 relative ${showVideo ? "hidden" : "block"} `}
          >
            <img src="/assets/2560/product/iremo.jpeg" alt="" />
            <img className="absolute w-28 cursor-pointer" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} src="/assets/play.svg" alt="" />
          </div>
          <video autoPlay muted className={`h-100 ${showVideo ? "block" : "hidden"}`} controls>
            <source src="/assets/iremo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
