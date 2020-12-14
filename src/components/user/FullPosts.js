import React, {Component} from 'react';
import PostService from "../../service/PostService";

class FullPosts extends Component {

    state = {post: null};

    postService = new PostService();

    async componentDidMount() {
        const {postId} = this.props;
        const post = await this.postService.post(postId);
        this.setState({post})
    }


    render() {
        const {post} = this.state
        return (
            <div>
                {post && <h2>{post.id}-{post.title}-{post.body}</h2> }
            </div>
        );
    }
}

export default FullPosts;