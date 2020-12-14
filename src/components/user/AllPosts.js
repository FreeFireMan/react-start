import React, {Component} from 'react';
import Post from "./Post";
import PostService from "../../service/PostService";
import {Route, Switch, withRouter} from 'react-router-dom';
import FullPosts from "./FullPosts";




class AllPosts extends Component {

    postService = new PostService()

    state = {posts: []}


   async componentDidMount()  {await this.postService.getAllPost().then(value => this.setState({posts:value}))}


    render() {
        const {posts} = this.state;
        const {match: {url}} = this.props;
        return (

            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} />)
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        const {match: {params: {id}}} = props;
                        return <FullPosts postId={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );

    }

}
export default withRouter(AllPosts);