import React from "react";
import Head from "next/head";
import Banner from "../../components/banner/banner.component";
import Sub from "../../components/sub-banner/sub.component";
import Media from "../../components/media/media.component";

const Index = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <Banner title="Contáctame" />
      </div>
      <div className="sub-content">
        <Sub
          title="Conoceme 🤝"
          content="Puedes contactarme a través de mis redes sociales y correo, también puedes hechar un vistazo a mi cuenta de Github. Si te gustó este portafolio házmelo saber!"
        />
        <Media />
      </div>
    </>
  );
};

export default Index;
