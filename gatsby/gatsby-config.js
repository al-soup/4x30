import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: "4x30 Party",
    siteUrl: "https://4x30.party",
    description: "Party of the year."
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
};
