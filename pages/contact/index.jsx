import React from "react";
import Head from "next/head";
import Banner from "../../components/banner/banner.component";

const Index = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <Banner title="Contáctame" />
      </div>
    </>
  );
};

export default Index;
