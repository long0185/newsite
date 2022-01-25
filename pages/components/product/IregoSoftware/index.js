import React, { useState } from "react";
import Banner from "../../Banner";
import Carousel from "../../../components/Carousel";
import s from "./index.module.css";
import { motion } from "framer-motion";
export default function index() {
  const [num, setnum] = useState(0);
  return (
    <div
      id="software"
      className="product-software col-lg-12 d-flex justify-content-center flex-column"
    >
      <Banner
        img={"/assets/newtitle/irego/title_3.png"}
        desc="通过游戏进行训练，增加趣味性。结合VR实现虚拟现实场景，增加训练的本体感和灵活度"
      />

      <div className="software-content w-100 d-center">
        <div className="col-1  flex justify-center">
          <img
            src="/assets/2560/home/left-arrow.svg"
            className={`${s.icon} cursor-pointer`}
            onClick={() => setnum(num + 1)}
          />
        </div>
        <div className={`${s.wrap} overflow-hidden`}>
          <motion.div
            className={`flex`}
            animate={{
              translateX: `${num * 34.5 + "%"}`,
              transition: {
                duration: 2,
              },
            }}
          >
            <img
              className="img-wrap img-fluid"
              src="/assets/2560/product/irego/dog.png"
            />
            <img
              className="img-wrap img-fluid"
              src="/assets/2560/product/irego/forest.png"
            />
            <img
              className="img-wrap img-fluid"
              src="/assets/2560/product/irego/run-cat.png"
            />
            <img
              className="img-wrap img-fluid"
              src="/assets/2560/product/irego/dog.png"
            />
            <img
              className="img-wrap img-fluid"
              src="/assets/2560/product/irego/forest.png"
            />
            <img
              className="img-wrap img-fluid"
              src="/assets/2560/product/irego/run-cat.png"
            />
          </motion.div>
        </div>
        <div className="col-1  flex justify-center">
          <img
            src="/assets/2560/home/right-arrow.svg"
            className={`${s.icon} cursor-pointer`}
            onClick={() => setnum(num - 1)}
          />
        </div>
      </div>
    </div>
  );
}
