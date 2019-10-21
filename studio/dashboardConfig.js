export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dad21eaf2af8fc90f0e488d',
                  title: 'Sanity Studio',
                  name: 'test-landing-pages-studio',
                  apiId: '4a348c2b-d5e6-4892-a0d8-e4344050c005'
                },
                {
                  buildHookId: '5dad21eae0acb8f717e103ae',
                  title: 'Landing pages Website',
                  name: 'test-landing-pages',
                  apiId: '2beced1c-dc91-43b5-8e3b-20928995ba01'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/f0rmatme/test-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-landing-pages.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
