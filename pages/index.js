import Head from "next/head";
import { NavBar } from "../components/navbar/navbar.component";
import Banner from "../components/banner/banner.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
      <div>
        <Banner title="Portafolio" />
      </div>
    </>
  );
}
