import React from "react";
import Head from "next/head";
import NavBar from "../../components/navbar/navbar.component";
import Banner from "../../components/banner/banner.component";
import CardList from "../../components/card-list/cardList.component";

const Index = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <NavBar />
      <div>
        <Banner title="Proyectos" />
      </div>
    </>
  );
};

export default Index;
