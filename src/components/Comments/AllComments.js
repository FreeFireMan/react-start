import React, {Component} from 'react';
import CommentService from "../../service/CommentService";
import Comment from "./Comment";



class AllComments extends Component {

    commentService = new CommentService()

    state = {comments: []}

    async componentDidMount() { await this.commentService.comments().then(value => this.setState({comments:value}))}


    render() {
        let {comments} = this.state
        return (
            <div>
                {
                   comments.map(value => <Comment item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;