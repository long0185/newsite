import * as React from "react";
import Navbar from "../../Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import s from "./index.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Example = () => {
  const [num, setNum] = useState(0);
  const ref = React.useRef(null);
  const [list, setList] = useState([]);
  React.useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setNum((num) => (num + 1) % list.length);
    }, 5000);
    return () => clearTimeout(ref.current);
  }, [num, list.length]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/homeone")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            setList(val);
          }
        });
    }
    getList();
  }, []);
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setNum(newNum % list.length);
    }
    if (direction == "right") {
      const newNum = (num + 1) % list.length;
      setNum(newNum);
    }
  };
  const variants = {
    toTop: (i) => ({
      marginTop: `450px`,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    }),
    reset: {
      marginTop: `600px`,
      opacity: 0.5,
      transition: {
        duration: 1,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden w-100 h-100">
      <Navbar />
      <Carousel autoPlay={true} infiniteLoop={true}>
        {list.map((item, idx) => (
          <div key={idx}>
            <img src={item.ImageUrl} />
            <p className="legend">Legend 1</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Example;
