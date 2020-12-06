import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item,choseUser} = this.props;
        return (
            <div>
                {item.id}-{item.title}
                <button onClick={() => choseUser(item.id) }>chose</button>
            </div>
        );
    }
}

export default User;