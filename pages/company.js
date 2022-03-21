import React from "react";
import Banner from "./components/company/Banner";
import Team from "./components/company/Team";
import Honor from "./components/company/Honor";
import History from "./components/company/history";
import Unit from "./components/company/Unit";
import Contact from "./components/company/Contact";
import Navbar from "./components/Navbar";
import Head from "next/head";
export default function company() {
  return (
    <div>
      {/* <Head>
        <script src="/assets/js/www.js"></script>
        <script src="/assets/js/ibmscript.js"></script>
      </Head> */}
      <Navbar />
      <div className="mt_104">
        <Banner />
        <Team />
        <History />
        <Honor />
        <Unit />
        <Contact />
      </div>
    </div>
  );
}
