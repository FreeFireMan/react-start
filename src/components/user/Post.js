import React, {Component} from 'react';

class Post extends Component {
    render() {
    let {item,chosenPosts} = this.props
        return (
            <div>
                {item.id}-{item.title}
                <button onClick={()=> chosenPosts(item.id)}>chose</button>
            </div>
        );
    }
}

export default Post;