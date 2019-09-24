export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d89f15a21895547ba1960a6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-ztxyn312',
                  apiId: '6f8f3014-80c9-4500-a9e1-9767417a4a8f'
                },
                {
                  buildHookId: '5d89f15b20057e69264163e5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-iafzes1v',
                  apiId: '4a22bd5b-fd15-42f0-a87f-21449f44671d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freiksenet/sanity-gatsby-blog-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-iafzes1v.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
