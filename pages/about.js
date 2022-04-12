import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout/layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>GamersFeed</title>
        <meta name="description" content="Best Gaming news on Internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isSiteHeaderContent={false}>
        <div className="w-full m-4">
          <div>
            <h1 className="text-4xl">About us</h1>
            <div>
              <h2>How GamersFeed was born</h2>
              <p></p>
            </div>
            <div>
              <h2>Our Philosophy</h2>
              <p></p>
            </div>
            <p></p>
          </div>
          <div></div>
        </div>
      </Layout>
    </div>
  );
}
