var React = require('react');

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.itemInput = null;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const newContent = this.itemInput.value;
		const newItem = {
			date: Date.now(),
			content: newContent
		}
		this.props.onSubmit(newItem);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="item">Add an item</label>
				<input ref={input => this.itemInput = input} name="item" type="text" onChange={this.handleChange} />
				<input type="submit" value="Add" />
			</form>
		);
	}
}

export default Form;