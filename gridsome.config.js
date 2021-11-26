// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Codely Skeletons ☠️",
  plugins: [
    {
      use: "@gridsome/source-graphql",
      options: {
        url: "https://api.github.com/graphql",
        fieldName: "github",
        typeName: "githubTypes",

        headers: {
          Authorization: `Bearer ${process.env.GH_TOKEN}`
        }
      }
    }
  ]
};
