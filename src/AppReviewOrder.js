import React from 'react';
import Summary from './Summary';
import './style.css';


class AppReviewOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			// selectedPlan: this.props.selectedPlan
		};

	};


	render() {

		return (
			<>
				<h1 className="title">Confirm your subscription</h1>
				<Summary
					selectedPlan={this.props.selectedPlan}
					addToPrice={this.props.addToPrice}
					options={this.props.options}
					memberData={this.props.memberData}
				/>
			</>
		);
	}
}

export default AppReviewOrder;
