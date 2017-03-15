var React = require('react');

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		console.log(this.itemInput.value);
		event.preventDefault();
		const newContent = this.itemInput.value;
		const newItem = {
			date: Date.now(),
			content: newContent
		}
		console.log(newItem);

		let myNewItems = Object.assign([], this.state.items);
		myNewItems.push(newItem);
		console.log(myNewItems);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label></label>
				<input ref={input => this.itemInput = input} name="item" type="text" onChange={this.handleChange} />
				<input type="submit" value="Add an item" />
			</form>
		);
	}
}

export default Form;