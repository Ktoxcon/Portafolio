import Head from "next/head";
import ImageSubBanner from "../components/imageSub-banner/imageSubBanner.component";
import Sub from "../components/sub-banner/sub.component";
import Banner from "../components/banner/banner.component";
import Directory from "../components/directory/directory.component";
import Subtitle from "../components/subtitle/subtitle.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Banner title="Bienvenido" />
      </div>
      <div className="sub-content">
        <Sub
          title="Kenneth Toxcon"
          content="Desarrollador Web y Móvil"
          img="https://inizsoft.com/wp-content/uploads/2020/01/website-min.gif"
        />
        <Sub
          title="Sobre Mi"
          content="Mi nombre es Kenneth, tengo 18 años, actualmente estudio en Kinal y me encanta aprender nuevas tecnologías."
        />
        <ImageSubBanner img="https://i.ibb.co/bvQp038/3327590.jpg" />
        <Sub
          title="I Love Code ❤"
          content="Disfruto mucho programar y resolver retos, puedo trabajar tanto en frontend como en backend pero me gustan un poco más las tareas relacionadas al backend."
        />
        <Sub
          title="LowLevel 🤿"
          content="Creo mucho en el poder de los lenguajes de bajo nivel, sobre todo sus usos en la seguridad informática y tecnologías nuevas. ❤ C, Rust, Assembly ❤"
        />
        <Subtitle subtitle="Habilidades y Tecnologías" />
        <Directory />
      </div>
    </>
  );
}
