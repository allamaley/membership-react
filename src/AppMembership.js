import React from 'react';
import Plan from './Plan';
import './style.css';

class AppMembership extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [
				{
					id: 1,
					size: "100 blocks",
					title: "Basic",
					description: "...",
					price: "1000"
				},
				{
					id: 2,
					size: "200 blocks",
					title: "VIP",
					description: "...",
					price: "3000"
				},
				{
					id: 3,
					size: "300 blocks",
					title: "Gold",
					description: "...",
					price: "6000"
				}
			]
		}
	};
	render() {
		const planComponent = this.state.data.map(plan => <Plan key={plan.id}
			data={plan} />)

		return (
			<div>
				<h1 className="title">Be a member!</h1>

				<h2 className="subtitle">
					Glad to know you are joining us.
					<br />Let's pick up a proper plan for you.
				</h2>

				<div className="plans">
					{planComponent}
				</div>
				<div className="error">you should pick a plan to continue</div>
			</div>
		);
	}
}

export default AppMembership;
