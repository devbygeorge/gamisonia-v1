import Head from "next/head";

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Second() {
  return (
    <>
      <Head>
        <title>Second Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Second Page
      <Footer />
    </>
  );
}
