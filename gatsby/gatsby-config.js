import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: "4x30i",
    siteUrl: "https://4x30.party",
    description: "Party of the year."
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "rxrh22q3",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }
  ]
};
