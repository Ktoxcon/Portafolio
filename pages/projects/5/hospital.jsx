import React from "react";
import Head from "next/head";
import ProjectContainer from "../../../components/project-container/projectContainer.component";

const Hospital = () => {
  const hospital = {
    id: 2,
    name: "Hospital de Infectología",
    description:
      "Sistema para administrar un Hospital, mediante una interfaz gráfica y base de datos.",
    skills: ["Java", "JavaFX", "MySQL"],
    image: "https://i.pinimg.com/originals/d7/ab/5f/d7ab5f8402e2d08ae29259c898d2f19c.gif",
  };

  return (
    <>
      <Head>
        <title>Hospital</title>
      </Head>
      <ProjectContainer project={hospital} />
    </>
  );
};

export default Hospital;
