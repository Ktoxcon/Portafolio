import React from "react";
import Head from "next/head";
import ProjectContainer from "../../../components/project-container/projectContainer.component";

const Biblioteca = () => {
  const biblioteca = {
    id: 1,
    name: "Biblioteca",
    description:
      "Sistema para administración de una biblioteca por medio de la consola y memoria dinámica",
    skills: ["Java", "Estructuras de datos", "Memoria Dinámica"],
    image: "https://i.ibb.co/Ht48YNL/bb.png",
  };

  return (
    <>
      <Head>
        <title>Biblioteca</title>
      </Head>
      <ProjectContainer project={biblioteca} />
    </>
  );
};

export default Biblioteca;
