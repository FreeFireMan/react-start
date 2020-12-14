import React, {Component} from 'react';
import Post from "./Post";
import PostService from "../../service/PostService";
import {Route, withRouter} from 'react-router-dom';
import FullPosts from "./FullPosts";


class AllPosts extends Component {

    postService = new PostService()
    state = {posts: []}

    componentDidMount() {
        this.postService
            .getAllPost()
            .then(posts => this.setState({posts}))
    }

    render() {

        const {posts} = this.state;
        const {match: {url}} = this.props;

        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <hr/>
                <Route path={url + '/:id'}
                       render={({match: {params: {id}}}) =>
                           <FullPosts postId={id} key={id}/> }/>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);
