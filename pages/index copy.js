import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import Carousel from "./components/Home/Carousel";

import SecondBanner from "./components/Home/SecondBanner";
import ThirdBanner from "./components/Home/ThirdBanner";
import Modal from "./components/Modal";
import s from "./index.module.css";
import Navbar from "./components/Navbar";
import MobileCarousel from "./components/MobileCarousel";
import MobileContent from "./components/MobileContent";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0.8,
    scale: 0.8,
    transition: {
      type: "easeInOut",
      duration: 1,
    },
  },
};
class PC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPC: true,
      sectionsColor: [],
      num: 0,
      fullpages: [
        {
          id: 1,
          element: <Carousel />,
        },
        {
          id: 2,
          element: <SecondBanner />,
        },
        {
          id: 3,
          element: <ThirdBanner />,
        },
      ],
    };
  }
  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    if (direction == "down") {
      this.setState((state, props) => ({
        num: state.num + 1,
      }));
    }
    if (direction == "up") {
      this.setState((state, props) => ({
        num: state.num - 1,
      }));
    }
    console.log("this.state.num", this.state.num);
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      ></div>
    );

    return (
      <div className="hidden mobile:block App">
        <motion.div
          className={`${s.modal} fixed flex items-center justify-center bottom-0 top-0 left-0 right-0 border bg-gray-200`}
          animate={{
            scale: [1, 2, 3, 4, 6],
            opacity: [1, 1, 1, 0.9, 0],
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{
            times: [0, 0.2, 0.5, 0.8, 1],
            delay: 3.6,
            duration: 0.3,
            ease: "linear",
          }}
        >
          <Modal />
        </motion.div>
        <Menu />
        <ReactFullpage
          scrollingSpeed={1000}
          easingcss3={`ease-in-out`}
          loopHorizontal={false}
          pluginWrapper={pluginWrapper}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map((item, index) => (
                <motion.div key={item.id} className={`section ${s.banner_item} `} animate={this.state.num != item.id ? "visible" : "hidden"} variants={variants}>
                  {item.element}
                </motion.div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

const Mobile = () => {
  return (
    <div className="App">
      <Navbar />
      <MobileCarousel />
      <MobileContent />
    </div>
  );
};

function App() {
  const [isPc, setisPc] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    let width = document.documentElement.clientWidth;
    let bool = width <= 1080 ? false : true;
    setisPc(bool);
    window.addEventListener("resize", () => {
      width = document.documentElement.clientWidth;
      bool = width <= 1080 ? false : true;
      setisPc(bool);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  return isPc ? <PC list={list} /> : <Mobile />;
}

export default App;
