import { NextPage } from "next";
import Head from "next/head";
import appConfig from "~/config/app";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <main className="container mx-auto text-center">
        <h1 className="text-4xl">Hack U</h1>
      </main>
    </div>
  );
};

export default Home;
