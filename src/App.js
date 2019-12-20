import React from 'react';
import AppMembership from './AppMembership';
import AppUser from './AppUser';
import AppReviewOrder from './AppReviewOrder';
import './style.css';

class App extends React.Component {
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
			screens: [
				'AppMembership',
				'AppUser',
				'AppReviewOrder'
			],
			currentStepNumber: 1,
			selectedPlan: {
				id: 0,
				size: "100 blocks",
				title: "Basic",
				description: "...",
				price: "1000",
				active: false
			},
		};
		this.isLastStep = this.isLastStep.bind(this);
		this.progress = this.progress.bind(this);
		this.nextButtonAction = this.nextButtonAction.bind(this);
		this.goBack = this.goBack.bind(this);
		// this.pickPlan = this.pickPlan.bind(this);
	};
	isLastStep = () => {
		return this.state.currentStepNumber === this.state.screens.length;
	};
	progress = () => {
		return (this.state.currentStepNumber / this.state.screens.length()) * 100;
	};

	submit = (index) => {
		console.log(index);
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
	}

	nextButtonAction = () => {
		this.submit();
		this.setState((prevState) => {
			return {
				currentStepNumber: prevState.currentStepNumber + 1
			}
		});
	};
	goBack = () => {
		this.setState((prevState) => {
			return {
				currentStepNumber: prevState.currentStepNumber - 1
			}
		});
	}

	render() {
		return (
			<div>
				{
					(this.state.currentStepNumber === 1) ? (
						<AppMembership data={this.state.data} selectedPlan={this.state.selectedPlan} submit={this.submit.bind(this)} />
					) : (
							(this.state.currentStepNumber === 2) ? (
								<AppUser />
							) : (
									<AppReviewOrder selectedPlan={this.state.selectedPlan} />
								)
						)
				}

				<div className="buttons">
					<button className="btn btn-back" onClick={this.goBack} style={{ display: this.state.currentStepNumber >= 2 ? 'block' : 'none' }}>
						Back
					</button>
					<button className="btn btn-next" onClick={this.nextButtonAction}> Next</button>
				</div>
			</div>
		)
	}
}

export default App;
