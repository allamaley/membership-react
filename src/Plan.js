import React from 'react';
import './style.css';

class Plan extends React.Component {
	render() {
		return (
			<div className={this.props.active ? 'active-plan plan' : 'plan'}
				onClick={this.props.pickPlan}>
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

