import Head from "next/head";
import Banner from "../components/banner/banner.component";
import Sub from "../components/sub-banner/sub.component";
import ImageBanner from "../components/image-banner/imageBanner.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Banner title="Kenneth Toxcon" />
      </div>
      <div className="sub-content">
        <Sub title="Kenneth Toxcon" content="Desarrollador Web y Móvil" />
        <ImageBanner img="" />
      </div>
    </>
  );
}
