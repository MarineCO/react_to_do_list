var React = require('react');

class Items extends React.Component {
	render() {
		const listItems = this.props.items.map( item => {
			return <li key={ item.id }>{ item.content }</li>;
		});
		return (
			<div>
				<ul>{ listItems }</ul>
			</div>
			);
	}
}

export default Items;