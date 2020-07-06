import React from "react";
import Head from "next/head";
import Banner from "../../components/banner/banner.component";
import NavBar from "../../components/navbar/navbar.component";

const Index = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar />
      <div>
        <Banner title="Conoceme" />
      </div>
    </>
  );
};

export default Index;
