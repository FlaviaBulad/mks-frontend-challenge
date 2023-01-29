import Head from "next/head";

import { GlobalStyle } from "@/styles/globals";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Front end Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <main></main>
    </>
  );
}
