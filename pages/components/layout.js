import Footer from "../components/Footer";
import Head from "next/head";
import ToTop from "./ToTop";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const { pathname } = useRouter();
  console.log("pathname", pathname);
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
        {pathname !== "/" && <ToTop />}
      </div>
    </>
  );
}
