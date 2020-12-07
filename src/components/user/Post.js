import React, {Component} from 'react';

class Post extends Component {
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

export default Post;