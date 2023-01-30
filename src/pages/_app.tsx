import type { AppProps } from "next/app";
import Head from "next/head";

import { GlobalStyle } from "@/styles/globals";
import Header from "@/components/Layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Front end Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
