module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    subtitle: 'Fetch data from local WP'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true
      }
    }
  ],
};
