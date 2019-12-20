import React from 'react';
import Plan from './Plan';
import './style.css';

class AppMembership extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					id: 0,
					size: "100 blocks",
					title: "Basic",
					description: "...",
					price: "1000",
					active: false
				},
				{
					id: 1,
					size: "200 blocks",
					title: "VIP",
					description: "...",
					price: "3000",
					active: false
				},
				{
					id: 2,
					size: "300 blocks",
					title: "Gold",
					description: "...",
					price: "6000",
					active: false
				}
			],
			selectedPlan: this.props.selectedPlan,
		}
	};
	componentDidUpdate() {
		console.log("Did Update")
	}
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
	pickPlan = (index) => {
		this.setState((prevState) => {
			const updatedData = [...prevState.data].map((item, id) => {
				if (id === index && item.active === false) {
					return {
						...item,
						active: true
					}
					// item.active = true
				}
				else {
					return {
						...item,
						active: false
					}
					// item.active = false
				}
			});
			// const data = [...prevState.data].map((item, i) => (item.active == false && i == index) ? Object.assign(item, { active: true }) : Object.assign(item, { active: false }));
			console.log(updatedData);
			console.log(this.state.selectedPlan);
			return {
				selectedPlan: this.state.data[index],
				data: updatedData
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
							selectedPlan={this.state.selectedPlan}
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
