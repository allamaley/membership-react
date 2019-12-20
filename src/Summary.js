import React from 'react';
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
						<label className="container" htmlFor="unicorn">
							+ 500 Building Blocks and Dancing Unicorn
            <input
								type="checkbox"
								value="bundles"
								id="unicorn"
							/>
							<span className="checkmark"></span>
						</label>
					</div>
				</div>

				<div className="plans">
					<div className="plan active-plan selected-plan">
						<div className="size">{this.props.selectedPlan.size}</div>

						<div className="description">
							<span className="title">NAME</span>
							<span className="description">DESC</span>
						</div>

						<div className="price">
							<span className="euro-sign">€</span>
							<span className="number">PRICE</span>
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

