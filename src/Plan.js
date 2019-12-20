import React from 'react';
import './style.css';

class Plan extends React.Component {
	constructor(props) {
		super(props);
		this.toggleClass = this.toggleClass.bind(this);
		this.state = {
			selectedPlan: null,
		};
	}
	toggleClass() {
		const currentState = this.state.active;
		this.setState(prevState => {
			if (prevState == 'plan')
				return {
					active: !currentState
				}
		}
		);
	};
	pickPlan(plan) {
		this.setState({
			selectedPlan: plan
		});
	}

	render() {
		return (
			<div className={this.state.active ? 'active-plan plan' : 'plan'}
				onClick={this.pickPlan(plan)}>
				<div className="size">{this.props.data.size}</div>
				<div className="description">
					<span className="title">{this.props.data.title}</span>
					<span className="description">{this.props.data.description}</span>
				</div>
				<div className="price">
					<span className="euro-sign">€</span>
					<span className="number">{this.props.data.price}</span>
				</div>
			</div>
		);
	}
}

export default Plan;

