export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e57fcf923a3a525230af549',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-53v6b4sz',
                  apiId: '948720e4-e947-48ef-b9eb-8bd3ae644053'
                },
                {
                  buildHookId: '5e57fcf90b7ebd4b612c9fee',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7mgk47p2',
                  apiId: 'ae97864b-1c4f-49fd-914d-2bb979936ff0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luukdebruin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7mgk47p2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
