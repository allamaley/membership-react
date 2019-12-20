import React from 'react';
import Plan from './Plan';
import './style.css';

class AppMembership extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					id: 1,
					size: "100 blocks",
					title: "Basic",
					description: "...",
					price: "1000",
					active: false
				},
				{
					id: 2,
					size: "200 blocks",
					title: "VIP",
					description: "...",
					price: "3000",
					active: false
				},
				{
					id: 3,
					size: "300 blocks",
					title: "Gold",
					description: "...",
					price: "6000",
					active: false
				}
			],
			selectedPlan: null,
		}
	};

	pickPlan = (index) => {
		this.setState((prevState) => {
			const data = [...prevState.data].map((item, i) => (item.active == false && i == index) ? Object.assign(item, { active: true }) : Object.assign(item, { active: false }));
			console.log(data);
			return {
				selectedPlan: this.state.data[index],
				data: data
			}
		});
	};

	render() {

		return (
			<div>
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
							pickPlan={this.pickPlan.bind(this, index)}
							active={this.state.active}
						/>
					}
					)}
				</div>
				<div className="error">you should pick a plan to continue</div>
			</div>
		);
	}
}

export default AppMembership;
