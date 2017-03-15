var React = require('react');

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id:1,
					content:"Travailler React"
				},
				{
					id:2,
					content:"Travailler React"
				},
				{
					id:3,
					content:"Travailler React"
				},
				{
					id:4,
					content:"Travailler React"
				}
			]
		}
	}

}

export default Items