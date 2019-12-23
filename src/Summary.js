import React from 'react';
import Option from './Option';
import './style.css';

class Summary extends React.Component {
	render() {
		return (
			<div className="summary">
				<h3>Subscription</h3>

				<p className="description">Please review your member package.</p>

				<h3>Add some blocks!</h3>

				<div className="options">
					<div className="option">
						{
							this.props.options.map(item => <Option key={item.name} options={item}
								addToPrice={this.props.addToPrice} />)
						}
					</div>
				</div>

				<div className="plans">
					<div className="plan active-plan selected-plan">
						<div className="size">{this.props.selectedPlan.size}</div>

						<div className="description">
							<span className="title">{this.props.selectedPlan.title}</span>
							<span className="description">{this.props.selectedPlan.description}</span>
						</div>

						<div className="price">
							<span className="euro-sign">€</span>
							<span className="number">{this.props.selectedPlan.price}</span>
						</div>
					</div>
				</div>

				<div className="address">
					<div className="w-2/3">
						<h3>Member</h3>
						<p className="description">Your address is</p>
					</div>

					<div className="w-1/3">
						<h3>NAME</h3>
						<p className="leading-normal">ADDRESS</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Summary;

