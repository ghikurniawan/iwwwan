const DEFAULT_PROJECTS = [
  {
    id: '1',
    slug: 'hexcape',
    title: 'Hexcape',
    description: 'A game that combines iOS and physical puzzle game, using 3D, 360 world view, and AR',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    views: 8950,
    likes: 540,
    tags: ['tag1', 'tag2'],
    content: {
      type: 'doc',
      content: []
    },
    thumbnail: 'https://source.unsplash.com/random/?abstract,space'
  },
  {
    id: '2',
    slug: 'notionlink',
    title: 'Notiolink',
    description: 'Self-hostable branded link shortener built with Next.js & Notion API',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    views: 6250,
    likes: 240,
    tags: ['tag1', 'tag2'],
    content: {
      type: 'doc',
      content: []
    },
    thumbnail: 'https://source.unsplash.com/random/?abstract,paint'
  },
]

export default DEFAULT_PROJECTS;