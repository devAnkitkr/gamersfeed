import { gql, GraphQLClient, request } from 'graphql-request';
import Layout from '../../components/Layout/layout';
import PostFeed from '../../components/postFeed/postFeed';

export default function categoryPage({ posts }) {
  const CategoryName = posts[0] && posts[0].categories[0].name;
  const articleCount = posts.length;

  return (
    <Layout>
      <div className="w-full p-4 my-6">
        <h4 className="font-bold text-sm py-2">Category</h4>
        <h1 className="font-bold text-4xl">{CategoryName}</h1>
        <h4 className="text-lg">A collection of {articleCount} posts</h4>
      </div>
      <PostFeed posts={posts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;
  const BearerToken = process.env.GRAPHQL_TOKEN_VALUE;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${BearerToken}`,
    },
  });
  const query = gql`
    query MyQuery {
      categories {
        slug
      }
    }
  `;

  const data = await graphQLClient.request(query);

  return {
    paths: data.categories.map((item, index) => {
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
  const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;
  const slug = params.slug;
  const query = gql`
    query MyQuery($slug: String!) {
      articles(
        orderBy: createdAt_DESC
        where: { categories_every: { slug: $slug } }
      ) {
        title
        slug
        excerpt
        createdAt
        id
        featuredImage {
          url
        }
        author {
          name
          authorPhoto {
            url
          }
        }
        categories {
          name
        }
      }
    }
  `;

  const data = await request(graphqlAPI, query, { slug });
  return {
    props: {
      posts: data.articles,
    },
    revalidate: 60,
  };
}
