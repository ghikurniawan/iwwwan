const DEFAULT_SNIPPETS = [
  {
    id: '1',
    slug: 'flex-mental-model',
    title: 'Absolute Import',
    description: 'Setting up Absolute Imports with jsconfig',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    tags: ['css', 'flexbox'],
    content: {
      type: 'doc',
      content: []
    },
    views: 5603,
    likes: 320,
  },
  {
    id: '2',
    slug: 'auth-context',
    title: 'Authentication Context',
    description: `Great way to structure authentication context in React apps.`,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    tags: ['tag1', 'tag2'],
    content: {
      type: 'doc',
      content: []
    },
    views: 8250,
    likes: 620,
  },
]

export default DEFAULT_SNIPPETS;