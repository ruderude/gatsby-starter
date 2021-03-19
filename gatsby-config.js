module.exports = {
  siteMetadata: {
    title: `デフォルトタイトル`,
    titleTemplate: `%s · デフォルトタイトル`,
    description: `デフォルト詳細文`,
    author: `kunshi`,
    siteUrl: `https://example.site`, // gatsby-plugin-canonical-urlsで使ってるのであえてurlと分けた.
    url: `https://example.site`,
    image: `/icons/icon-96x96.png`,
    twitterUsername: `@examplemaster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected:true,        // 削除されたCSSの容量を表示 
        printRejected: false,  // 削除したCSSを最大100個まで一覧表示
        printAll: false,       // 削除したCSSを全て一覧表示 
        develop: false,        // 開発環境でbuildした時もCSSを削除
        tailwind: true,       // TailwindCSS使用時はTrue default: false
        whitelist: ['selector'], // 削除しないCSSを指定 default: []
        ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // 削除しないファイルを指定 default: []
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // 指定したファイルのCSSのみを削除 default: []
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
