import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import { motion } from "framer-motion";
import Carousel from "./components/Home/Carousel";
import SecondBanner from "./components/Home/SecondBanner";
import ThirdBanner from "./components/Home/ThirdBanner";
import Modal from "./components/Modal";
import s from "./index.module.css";
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="App">
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
                <motion.div
                  key={item.id}
                  className={`section ${s.banner_item} `}
                  animate={this.state.num != item.id ? "visible" : "hidden"}
                  variants={variants}
                >
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

export default App;
