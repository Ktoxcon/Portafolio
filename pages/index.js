import Head from "next/head";
import CardList from "../components/card-list/cardList.component";
import { NavBar } from "../components/navbar/navbar.component";
import Banner from "../components/banner/banner.component";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="layout">
        <Banner title="Portafolio"/>
        <CardList />
      </div>
    </>
  );
}
