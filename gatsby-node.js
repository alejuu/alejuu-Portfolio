const path = require('path')
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      workEntry:allContentfulWork {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.workEntry.edges.forEach(({ node }) => {
    createPage({
      path: `work/${node.slug}`,
      component: path.resolve('./src/templates/work-template.js'),
      context: {
        slug: node.slug
      }
    })
  })
}