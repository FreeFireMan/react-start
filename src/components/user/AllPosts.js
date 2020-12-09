import React, {Component} from 'react';
import Post from "./Post";
import {PostService} from "../../service/PostService";



class AllPosts extends Component {

    postService = new PostService()

    state = {posts: [], choseOne:null}

    chosenPosts = (id) => {this.postService.getPostById(id).then(value => this.setState({choseOne:value}))}

    componentDidMount() {this.postService.getAllPost().then(value => this.setState({posts:value}))}

    render() {
        let {posts, choseOne} = this.state
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} chosenPosts={this.chosenPosts}/>)
                }
                {choseOne && <h2>{choseOne.id}-{choseOne.title}</h2>}
            </div>
        );

    }

}
export default AllPosts;