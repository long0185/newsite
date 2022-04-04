import Layout from "./components/layout";
import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style.css";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const baseSize = 16;
    function setRem() {
      let scale = document.documentElement.clientWidth / 2560;
      const scaleH = document.documentElement.clientHeight / 1440;
      if (document.documentElement.clientWidth <= 1080) {
        scale = document.documentElement.clientWidth / 1080;
      }
      let reset = Math.min(scale, scaleH);
      console.log("reset", reset);
      document.documentElement.style.fontSize = baseSize * reset + "px";
    }
    setRem();
    window.addEventListener("resize", setRem);
    return () => window.removeEventListener("resize", () => console.log("clear"));
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
