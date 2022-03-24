import { gql, GraphQLClient, request } from 'graphql-request';

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;
const BearerToken = process.env.GRAPHQL_TOKEN_VALUE;

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${BearerToken}`,
  },
});

export async function getFeaturedPostDetails() {
  const query = gql`
    query MyQuery {
      articles(orderBy: createdAt_DESC, where: { featuredPost: true }) {
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
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data.articles;
}

export async function getAllPostSlugs() {
  const query = gql`
    query MyQuery {
      articles {
        slug
      }
    }
  `;
  const data = await graphQLClient.request(query);
  return data.articles;
}

export async function getPostContent(slug) {
  const query = gql`
    query MyQuery($slug: String!) {
      articles(where: { slug: $slug }) {
        slug
        id
        createdAt
        excerpt
        title
        content {
          html
        }
        featuredImage {
          url
        }
        author {
          name
          authorPhoto {
            url
          }
        }
      }
    }
  `;

  const data = await request(graphqlAPI, query, { slug });
  return data;
}
