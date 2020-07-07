import { motion } from "framer-motion";
import React from "react";
import Head from "next/head";
import Banner from "../../components/banner/banner.component";
import CardList from "../../components/card-list/cardList.component";

const Index = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div>
        <Banner title="Proyectos" />
      </div>
      <CardList />
    </>
  );
};

export default Index;
