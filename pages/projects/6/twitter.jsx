import React from "react";
import Head from "next/head";
import ProjectContainer from "../../../components/project-container/projectContainer.component";

const Twitter = () => {
  const twitter = {
    id: 3,
    name: "Twitter API clone",
    description:
      "Simulación de la API de Twitter manejada a través de comandos en Postman",
    skills: ["JavaScript", "Express", "API"],
    image: "https://www.brandemia.org/sites/default/files/inline/images/twitter_logo_colores.gif",
    repository:"https://github.com/Ktoxcon/twitter-clone.git"
  };

  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <ProjectContainer project={twitter} />
    </>
  );
};

export default Twitter;
