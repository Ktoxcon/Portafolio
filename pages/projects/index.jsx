import React from "react";
import { NavBar } from "../../components/navbar/navbar.component";
import Banner from "../../components/banner/banner.component";

const Index = () => {
  return (
    <>
      <NavBar />
      <div>
        <Banner title="Proyectos" />
      </div>
    </>
  );
};

export default Index;
