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
		console.log(this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label></label>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Add an item" />
			</form>
		);
	}
}

export default Form;