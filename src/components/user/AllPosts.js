import React, {Component} from 'react';
import Post from "./Post";




class AllPosts extends Component {

    state = {users: [], choseOne: null};

    choseUsers = (id) => this.setState({choseOne: this.state.users.find(value => value.id === id)})

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                this.setState({users:value})
            })
    }


    render() {
        let {users,choseOne} = this.state;
        return (
            <div>
                {
                    users.map(value => (<Post item={value} key={value.id} choseUser={this.choseUsers}/>))
                }
                {choseOne && <h2>{choseOne.id}-{choseOne.title}</h2>}
            </div>
        );

    }

}
export default AllPosts;