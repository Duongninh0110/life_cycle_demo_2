import React from 'react';
import WithSubscription from '../hoc/WithSubscription';
import TextBlock from '../TextBlock/TextBlock'

class BlogPost extends React.Component {
    render() {
        return <TextBlock text={this.props.data} />;
    }
}

const BlogPostWithSubscription = WithSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);

export default BlogPostWithSubscription;