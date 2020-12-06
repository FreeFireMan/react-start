import React, {Component} from 'react';
import AllUsers from "./components/user/AllUsers";

class App extends Component {
    render() {
        return (
            <div>
                {
                    <AllUsers/>
                }
            </div>
        );
    }
}

export default App;