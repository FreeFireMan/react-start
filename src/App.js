import React, {Component} from 'react';
import AllPosts from "./components/user/AllPosts";

class App extends Component {
    render() {
        return (
            <div>
                {
                    <AllPosts/>
                }
            </div>
        );
    }
}

export default App;