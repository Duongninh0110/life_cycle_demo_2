

class DataSource {
    blogPosts = [
        {
            id: 1,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
        },
        {
            id: 2,
            content: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but'
        },
        {
            id: 3,
            content: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with'
        }
    ];

    addChangeListener = (handleChange) => {
        console.log('[DataSource.js] addChangeListener', handleChange);
    };

    removeChangeListener = (handleChange) => {
        console.log('[DataSource.js] removeChangeListener', handleChange);
    };

    getComments = () => {
        return [
            {
                id: 1,
                text: 'Good'
            },
            {
                id: 2,
                text: 'Very Good'
            },
            {
                id: 3,
                text: 'Very very Good'
            },
        ]
    }

    getBlogPost = (id) => {
        return this.blogPosts.find( post => post.id === id)
    }
}

export default new DataSource;