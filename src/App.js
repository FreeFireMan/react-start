import React, {Component} from 'react';
import AllPosts from "./components/user/AllPosts";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import AllComments from "./components/Comments/AllComments";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/posts'}>posts</Link>
                    <br/>
                    <Link to={'/comments'}>comments</Link>
                </div>
                <div>
                    <Switch>
                        <Route path={'/posts'} render={(props)=> {
                        return <AllPosts/>;}}/>

                        <Route path={'/comments'} render={(props)=>{
                            return <AllComments/>
                        }}/>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;