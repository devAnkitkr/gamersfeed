import Head from "next/head";
import React from "react";
import Layout from "../components/Layout/layout";

export default function About() {
  return (
    <div>
      <Head>
        <title>GamersFeed</title>
        <meta name="description" content="Best Gaming news on Internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isSiteHeaderContent={false}>
        <div>About page</div>
      </Layout>
    </div>
  );
}
