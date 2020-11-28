module.exports = {
  siteMetadata: {
    title: "sadlilblackboy"
  },
  plugins: [
    { resolve: "gatsby-plugin-typescript" },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-plugin-postcss" },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`
      }
    },
    { resolve: "gatsby-transformer-sharp" },
    { resolve: "gatsby-plugin-sharp" },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-79031036-3"],
        pluginConfig: {}
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "785646585394990"
      }
    }
  ]
};
