module.exports = {
  siteMetadata: {
    title: "sadlilblackboy"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-79031036-3"],
        pluginConfig: {}
      }
    },
    "gatsby-plugin-remove-serviceworker"
  ]
};
