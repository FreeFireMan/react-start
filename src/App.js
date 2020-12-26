import React, {Component} from 'react';
import userService from "./Service/userService";

class App extends Component {

    inputMain = React.createRef();

    userService = new userService()

    state = {
        inputValue: '',
        users: [],
        chosenOne: null
    }

    componentDidMount() { this.userService.getUsers().then(value => this.setState({users: value}))
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }


    onInputFill = () => {
        this.setState({inputValue: this.inputMain.current.value})
    }

    userFind = () => {
        const {inputValue, users} = this.state;
        const chosenOne = users.find(value => value.id === +inputValue);
        {
            chosenOne && this.setState({chosenOne})
        }
    }

    render() {
        let {inputValue, chosenOne} = this.state;
        return (
            <div>
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input ref={this.inputMain} type={'number'} onInput={this.onInputFill} value={inputValue}/>
                        {
                            inputValue > 0 && inputValue <= 10
                            ?<button onClick={this.userFind}>send</button>
                            :<button onClick={this.userFind} disabled>send</button>
                        }
                    </form>
                </div>

                {chosenOne && <h2>{chosenOne.id}-{chosenOne.name}</h2>}
            </div>
        );
    }
}

export default App;