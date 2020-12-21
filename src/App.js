import React, {Component} from 'react';

class App extends Component {

    state = {
        inputValue: '',
        users: [],
        isLoading: false,
        choseOne: null
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users, isLoading: false})
            })
    }

    oninputFill = ({target: {value}}) => {
        this.setState({inputValue: value});
    }

    userFind = () => {
        const {inputValue, users} = this.state;
		const choseOne = users.find(value => value.id === +inputValue);
		choseOne
			? this.setState({choseOne: `${choseOne.id}-${choseOne.name}`})
			: this.setState({choseOne: 'User not found'})

    }

    render() {

        let {inputValue, choseOne, isLoading} = this.state;

        return (
            <div>
                {isLoading
                    ? <h1>LOADING.....</h1>
                    : <div>
                        <input type='number' onInput={this.oninputFill} value={inputValue}/>
                        <button onClick={this.userFind}>send</button>
                      </div>
                }

                <h2>{choseOne}</h2>
            </div>
        );
    }
}

export default App;
