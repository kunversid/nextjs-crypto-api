import Head from "next/head";
import Image from "next/image";
import Coins from "../components/Coins";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kunver Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar type="text" placeholder="Search" />
      <Coins />
    </div>
  );
}
