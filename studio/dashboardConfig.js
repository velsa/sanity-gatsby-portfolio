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
                  buildHookId: '5e9edf39e2515206ea15b1f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9xasjphu',
                  apiId: 'e49ea57e-ff12-4f43-afdd-bb09eba19577'
                },
                {
                  buildHookId: '5e9edf3959b4320c95242a02',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xcea6ht5',
                  apiId: '142a27e3-d955-4312-a824-b85997d64581'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/velsa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xcea6ht5.netlify.app',
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
