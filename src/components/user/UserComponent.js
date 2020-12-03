import React, {Component} from 'react';
import './user.css';

class UserComponent extends Component {
    render() {
        let {item,cls} = this.props;
        return (
            <div className={cls}>
                {item.name}-{item.age}-{item.status.toString()}-{item.city}-{item.street}-{item.number}
            </div>
        );
    }
}

export default UserComponent;