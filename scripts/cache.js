const { gql, GraphQLClient } = require("graphql-request");
const fs = require("fs");

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;
const BearerToken = process.env.GRAPHQL_TOKEN_VALUE;

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${BearerToken}`,
  },
});

async function getAllPostsTitle() {
  const query = gql`
    query MyQuery {
      articles {
        title
        slug
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return JSON.stringify(data.articles);
}

(async () => {
  const data = await getAllPostsTitle();
  const fileContents = `export const posts = ${data}`;
  try {
    fs.readdirSync("cache");
  } catch (e) {
    fs.mkdirSync("cache");
  }

  fs.writeFile("cache/data.js", fileContents, function (err) {
    // writing to the cache/data.js file
    if (err) return console.log(err);
    console.log("Post's Titles and URL cached.");
  });
})();
