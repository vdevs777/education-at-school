import type { AppProps } from "next/app";

import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
      <title>Educação na Escola</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
