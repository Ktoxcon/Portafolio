import NavBar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="https://img.icons8.com/doodle/48/000000/linux-client.png" />
      </Head>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
