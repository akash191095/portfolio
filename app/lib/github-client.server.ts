import { GraphQLClient, gql } from "graphql-request";

export const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `bearer ${process.env.GITHUB_API_KEY}`,
  },
});

export const getListOfPRs = async () => {
  const query = gql`
    {
      viewer {
        contributionsCollection {
          pullRequestContributions(first: 10) {
            edges {
              node {
                pullRequest {
                  id
                  title
                  permalink
                  state
                  createdAt
                  repository {
                    name
                    description
                    homepageUrl
                  }
                  number
                }
              }
            }
          }
        }
      }
    }
  `;

  const {
    viewer: {
      contributionsCollection: {
        pullRequestContributions: { edges: data },
      },
    },
  }: any = await client.request(query);

  return data;
};
