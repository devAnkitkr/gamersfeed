import Head from 'next/head';
import GameRatingSection from '../components/GameRating/GameRatingSection';
import Layout from '../components/Layout/layout';
import PostFeed from '../components/postFeed/postFeed';
import { getFeaturedPostDetails, getFeatureGameReviews } from '../services';

export default function Home({ posts, gamesOftheWeek }) {
  return (
    <div>
      <Head>
        <title>GamersFeed</title>
        <meta
          name="description"
          content="Best news portal for xbox, ps3, ps4, ps5, PC, android and iphone users on Internet"
        />
        <meta
          name="keywords"
          content="PC games news, valorant, apex legend, pubg, bgmi, league of legends, PS5 games news"
        />
        <meta
          property="og:url"
          content={'https://www.' + process.env.BASE_URL}
        />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-image-preview:large" />
        <meta
          name="twitter:description"
          content="Website for gamers with latest gaming and technology news. Find release dates, trailers, and scores for all upcoming and recent video games in the world"
        ></meta>
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isSiteHeaderContent={true}>
        <GameRatingSection gamesOftheWeek={gamesOftheWeek} />
        <PostFeed posts={posts} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getFeaturedPostDetails()) || [];
  const gamesOftheWeek = (await getFeatureGameReviews()) || [];
  return {
    props: {
      posts,
      gamesOftheWeek,
    },
    revalidate: 60,
  };
}
