import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400&display=swap');
        </style>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
