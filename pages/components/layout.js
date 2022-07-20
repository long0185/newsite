import Footer from "../components/Footer";
import Head from "next/head";
import ToTop from "./ToTop";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Layout({ children }) {
  const { pathname } = useRouter();
  useEffect(() => {
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf("Opera") > -1;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
    if (isIE) {
      alert("请使用Chrome、Edge、Firefox等浏览器进行访问");
    }
  });
  return (
    <>
      <Head>
        <title>金矢机器人|康复医疗设备</title>
        {/* <title>xxx</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        /> */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <div className="container-fluid p-0 relative">
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
