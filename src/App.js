import React, {Component} from 'react';
import AllPosts from "./components/user/AllPosts";
import AllComments from "./components/Comments/AllComments";
import {Switch, Route, NavLink} from 'react-router-dom';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={'/posts'}>posts</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/comments'}>comments</NavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path={'/posts'} component={AllPosts}/>
                        <Route path={'/comments'} component={AllComments}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default App;
