var React = require('react');
import Form from './Form';

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id:1,
					content:"Work React"
				},
				{
					id:2,
					content:"Work React"
				},
				{
					id:3,
					content:"Work React"
				},
				{
					id:4,
					content:"Work React"
				}
			]
		}
	}
	render() {
		const listItems = this.state.items.map( item => {
			return <li key={ item.id }>{ item.content }</li>;
		});
		return (
			<div>
				<Form onSubmit={this.handleSubmit} />
				<ul>{ listItems }</ul>
			</div>
		);
	}
}

export default Items;