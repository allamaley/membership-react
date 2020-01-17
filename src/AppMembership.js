import React from 'react';
import Plan from './Plan';
import './style.css';

class AppMembership extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: this.props.data,
			selectedPlan: this.props.selectedPlan,
		}
	};
	componentDidMount() {
		if (this.state.selectedPlan !== null) {
			const index = this.state.selectedPlan.id;
			this.setState((prevState) => {
				const updatedData = [...prevState.data].map((item, id) => {
					if (id === index && item.active === false) {
						return {
							...item,
							active: true
						}
					}
					else {
						return {
							...item,
							active: false
						}
					}
				});
				return {
					data: updatedData
				}
			});
		}
		console.log("Mounted")
	}

	render() {

		return (
			<>
				<h1 className="title">Be a member!</h1>

				<h2 className="subtitle">
					Glad to know you are joining us.
					<br />Let's pick up a proper plan for you.
				</h2>

				<div className="plans">

					{this.state.data.map((plan, index) => {
						return <Plan
							key={index}
							data={plan}
							pickPlan={this.props.pickPlan.bind(this, index)}
							selectedPlan={this.props.selectedPlan}
							active={this.props.data[index].active}
						/>
					}
					)}
				</div>
				<div className="error">you should pick a plan to continue</div>

			</>
		);
	}
}

export default AppMembership;
