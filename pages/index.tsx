import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Header from "../components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Sawix Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        {/* Portfolio */}
        <Portfolio />

        {/* About */}

        {/* Services */}

        {/* Jobs */}

        {/* Footer */}
      </main>
    </>
  );
}
