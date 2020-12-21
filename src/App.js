import React, {Component} from 'react';
class App extends Component {

	inputMain = React.createRef();

	state = {inputValue: '',users: [], choseOne: null}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json)
			.then(value => {
				this.setState({users: value})
			})
	}

	oninputFill = () =>{
		this.setState({inputValue: this.inputMain.current.value});
    }

    onFormSubmit = (e) =>{
	    e.preventDefault();
    }

    userFind = (id) => {this.setState({choseOne: this.state.users.find(value => value.id === id)})}

	render() {
		let {inputValue,choseOne} = this.state;
		let {userFind,item} = this.props
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input ref={this.inputMain} type={'number'} onInput={this.oninputFill} value={inputValue}/>
					<button onClick={()=> userFind(item.id)}>send</button>
				</form>
				{choseOne && <h2>{choseOne.id}-{choseOne.name}</h2>}
			</div>
		);
	}
}

export default App;