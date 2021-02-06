export default {
  widgets: [
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
                  buildHookId: '601f01c83966b223c606ba6b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ebigi73a',
                  apiId: 'f8a55ce9-d34c-4ec1-a5cf-b937bad1a6ea'
                },
                {
                  buildHookId: '601f01c83966b2274106ba28',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-n5y2o3vd',
                  apiId: 'beedc812-2eaf-49b9-aac9-9d54ce597b73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zombieFireITA/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-n5y2o3vd.netlify.app', category: 'apps'}
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
