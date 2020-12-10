import React, {Component} from 'react';
import Post from "./Post";
import PostService from "../../service/PostService";



class AllPosts extends Component {

    postService = new PostService()

    state = {posts: []}


   async componentDidMount()  {await this.postService.getAllPost().then(value => this.setState({posts:value}))}


    render() {
        let {posts} = this.state
        return (

            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} />)
                }
            </div>
        );

    }

}
export default AllPosts;