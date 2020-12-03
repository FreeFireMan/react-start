import React, {Component} from 'react';
import {users} from "./database/usersBase/userBase";
import UserComponent from "./components/user/UserComponent";

class App extends Component {
    render() {
        return (
            <div>{
                users.map((user,index) =>{
                    let clsX = index%2 ? 'two' : 'one'

                     return(
                         <UserComponent
                     item={user}
                     cls={clsX}
                     key={user.id}/>
                     )
                })
            }
            </div>
        );
    }
}

export default App;