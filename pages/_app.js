import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <style></style>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}
