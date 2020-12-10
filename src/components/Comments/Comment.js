import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {item.id}-{item.name}
            </div>
        );
    }
}

export default Comment;