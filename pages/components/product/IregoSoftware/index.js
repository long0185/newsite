import React, { useState } from "react";
import Banner from "../../Banner";
import Carousel from "../../../components/Carousel";
import s from "./index.module.css";
import { motion } from "framer-motion";
export default function index() {
  const [num, setnum] = useState(2);
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setnum(newNum);
    }
    if (direction == "right") {
      const newNum = num + 1 > 2 ? 2 : num + 1;
      setnum(newNum);
    }
  };
  return (
    <div
      id="software"
      className="product-software col-lg-12 d-flex justify-content-center flex-column"
    >
      <Banner
        img={"/assets/newtitle/irego/title_3.png"}
        desc="通过游戏进行训练，增加趣味性。结合VR实现虚拟现实场景，增加训练的本体感和灵活度"
      />

      <div className="software-content w-100 flex items-center justify-center relative">
        <div className="flex-1 flex items-center justify-center z-10 bg-$gray border h_505 opacity-50 left-0 ">
          <img
            src="/assets/2560/home/left-arrow.svg"
            className={`${s.icon} cursor-pointer`}
            onClick={() => handleClick("left")}
          />
        </div>
        <div className={`${s.wrap}`}>
          <motion.div
            className={`flex`}
            animate={{
              translateX: `${-num * 33.333 + "%"}`,
              transition: {
                duration: 2,
              },
            }}
          >
            <img
              className="w_727 h-100 img-fluid"
              src="/assets/2560/product/irego/dog.png"
            />
            <img
              className="w_727 h-100 img-fluid"
              src="/assets/2560/product/irego/forest.png"
            />
            <img
              className="w_727 h-100 img-fluid"
              src="/assets/2560/product/irego/run-cat.png"
            />
            <div className="w_727 h-100 relative text-transparent hover:text-gray-800 cursor-pointer">
              <img
                className="w-100 h-100"
                src="/assets/2560/product/irego/dog.png"
              />
              <span className="flex z-30 flex-col absolute bottom-0 top-0 left-0 right-0">
                fdafd
              </span>
            </div>

            <img
              className="w_727 h-100 img-fluid"
              src="/assets/2560/product/irego/forest.png"
            />
            <img
              className="w_727 h-100 img-fluid"
              src="/assets/2560/product/irego/run-cat.png"
            />
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center z-10 bg-$gray border h_505 opacity-50 right-0">
          <img
            src="/assets/2560/home/right-arrow.svg"
            className={`${s.icon} cursor-pointer`}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
}
