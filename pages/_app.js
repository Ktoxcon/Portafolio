import NavBar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
