import Layout from '../../components/Layout/layout';
import PostPage from '../../components/postPage/postPage';

import { getAllPostSlugs, getPostContent } from '../../services';

export default function postPage({ data }) {
  return (
    <Layout isSiteHeaderContent={false}>
      <PostPage data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = (await getAllPostSlugs()) || [];

  return {
    paths: data.map((item, index) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = (await getPostContent(slug)) || [];

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}
