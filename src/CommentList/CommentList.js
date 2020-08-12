import React from 'react';
import WithSubscription from '../hoc/WithSubscription';
import Comment from '../Comment/Comment';

class CommentList extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        );
    }
}

const CommentListWithSubscription = WithSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);

export default CommentListWithSubscription