const DEFAULT_POSTS = [
    {
        id: '1',
        slug: 'flex-mental-model',
        title: 'Back To Basic: Mental Model to Understand Flexbox',
        description: 'Mental models are personal, internal representations of external reality that people use to interact with the world around them. They are constructed by individuals based on their unique life experiences,',
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        tags: ['css', 'flexbox'],
        content: {
            type: 'doc',
            content: []
        },
        views: 5603,
        likes: 320,
        thumbnail: 'https://source.unsplash.com/random/?abstract,jellyfish'
    },
    {
        id: '2',
        slug: 'nextjs-data-fetching',
        title: 'Understanding Next.js Data Fetching (CSR, SSR, SSG, ISR)',
        description: `When I started to learn Next.js, I got overwhelmed with the list of abbreviations that looks similar, I didn't know what it is and what is the difference. It is quite confusing because when using Create React App,`,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        tags: ['tag1', 'tag2'],
        content: {
            type: 'doc',
            content: []
        },
        views: 8250,
        likes: 620,
        thumbnail: 'https://source.unsplash.com/random/?abstract,paint'
    },
]

export default DEFAULT_POSTS;