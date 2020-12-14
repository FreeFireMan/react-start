import React, {Component} from 'react';
import CommentService from "../../service/CommentService";

class FullComment extends Component {
    state = {comment: null}

    commentService = new CommentService()

   async componentDidMount() {
        const {commentId} = this.props;
        const comment = await this.commentService.comment(commentId);
       this.setState({comment});
    }

    render() {
        const {comment} = this.state
        return (
            <div>
                {comment && <h2>{comment.id}-{comment.name}-{comment.email}-{comment.body}</h2>}
            </div>
        );
    }
}

export default FullComment;