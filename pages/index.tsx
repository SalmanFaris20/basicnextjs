import type { NextPage } from 'next'
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Layout pageTitle="home">
        <Image src="/profile.jpg" width={200} height={200} alt="profile" />
        <h1>Salman Website</h1>
      </Layout>
    </div>
  );
};

export default Home
