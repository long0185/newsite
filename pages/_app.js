import Layout from "./components/layout";
import React, { useEffect } from "react";
import "../style.css";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const baseSize = 16;
    function setRem() {
      const scale = document.documentElement.clientWidth / 2560;
      const scaleH = document.documentElement.clientHeight / 1440;
      let reset = Math.min(scale, scaleH);
      reset = reset < 0.4 ? 0.4 : reset;
      document.documentElement.style.fontSize = baseSize * reset + "px";
    }
    setRem();
    window.addEventListener("resize", setRem);
    return () =>
      window.removeEventListener("resize", () => console.log("clear"));
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
