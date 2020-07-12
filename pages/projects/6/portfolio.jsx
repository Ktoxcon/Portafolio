import React from "react";
import Head from "next/head";
import ProjectContainer from "../../../components/project-container/projectContainer.component";

const Portafolio = () => {
  const Portafolio = {
    id: 4,
    name: "Portafolio",
    description:
      "Portafolio de proyectos realizados en Kinal, Estas en este proyecto ahora mismo!",
    skills: ["JavaScript", "React.JS", "Next.JS", "Framer Motion"],
    image:
      "https://i.ibb.co/09jyjpw/portfolio.png",
    repository: "https://github.com/Ktoxcon/Portafolio.git",
  };

  return (
    <>
      <Head>
        <title>Portafolio</title>
      </Head>
      <ProjectContainer project={Portafolio} />
    </>
  );
};

export default Portafolio;
