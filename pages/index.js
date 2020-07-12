import Head from "next/head";
import ImageSubBanner from "../components/imageSub-banner/imageSubBanner.component";
import Sub from "../components/sub-banner/sub.component";
import Banner from "../components/banner/banner.component";
import Directory from "../components/directory/directory.component";

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
        <ImageSubBanner img="https://i.ibb.co/bvQp038/3327590.jpg" />
        <Directory />
      </div>
    </>
  );
}
