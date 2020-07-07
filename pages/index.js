import Head from "next/head";
import Banner from "../components/banner/banner.component";
import Sub from "../components/sub-banner/sub.component";

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
        <Sub
          title="Desarrollador"
          content="Hola mi nombre es Kenneth, soy desarrollador web y móvil. Me interesa mucho la seguridad informática y amo los lenguajes de bajo nivel"
        />
        <Sub title="Desarrollador" content="Hola mi nombre es Kenneth" />
      </div>
    </>
  );
}
