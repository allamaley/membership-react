import React from 'react';
import AppMembership from './AppMembership';
import AppUser from './AppUser';
import AppReviewOrder from './AppReviewOrder';
import './style.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// loading: false,
			data: [
				{
					id: 0,
					size: "100 blocks",
					title: "Basic",
					description: "Public Cloud, 2 GB Storage, Standard SLA",
					price: 1000,
					active: false
				},
				{
					id: 1,
					size: "200 blocks",
					title: "VIP",
					description: "Public Cloud, 6 GB Storage, Standard SLA",
					price: 3000,
					active: false
				},
				{
					id: 2,
					size: "300 blocks",
					title: "Gold",
					description: "Public Or Private Cloud, 12GB, Tier 1 SLA Included.",
					price: 6000,
					active: false
				}
			],
			screens: [
				'AppMembership',
				'AppUser',
				'AppReviewOrder'
			],
			options: [
				{
					name: "unicorn",
					price: 6000,
					checked: false
				},
				{
					name: "bundles",
					price: 2000,
					checked: false
				},
			],
			currentStepNumber: 1,
			selectedPlan: {},
		};
		this.isLastStep = this.isLastStep.bind(this);
		this.progress = this.progress.bind(this);
		this.nextButtonAction = this.nextButtonAction.bind(this);
		this.goBack = this.goBack.bind(this);
		this.pickPlan = this.pickPlan.bind(this);
		// this.collectData = this.collectData.bind(this);
	};
	isLastStep = () => {
		return this.state.currentStepNumber === this.state.screens.length;
	};
	progress = () => {
		return (this.state.currentStepNumber / this.state.screens.length()) * 100;
	};

	_handleChange = event => {
		this.setState({

		});
	}
	addToPrice = (event) => {
		const optionName = event.target.id;
		const name = event.target.name;
		console.log('checkbox selected is:', name);
		let addPrice = 0;
		this.setState((prevState) => {
			prevState.options.forEach(element => {
				if (element.name === optionName) {
					element.checked = !element.checked;
					addPrice = !element.checked ? -element.price : element.price;
				};
			});

			const newPrice = prevState.selectedPlan.price + addPrice;
			const newData = Object.assign(prevState.selectedPlan,
				{
					price: newPrice,
				});
			return {
				selectedPlan: newData,
			}
		});
	};
	submit = (index) => {
		console.log(index);
		// this.setState((prevState) => {

		// });
	}

	nextButtonAction = () => {
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
	};

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
			return {
				data: updatedData,
				selectedPlan: updatedData[index],
			}
		});
	};

	render() {
		return (
			<div className="content">
				{
					(this.state.currentStepNumber === 1) ? (
						<AppMembership
							data={this.state.data}
							selectedPlan={this.state.selectedPlan}
							pickPlan={this.pickPlan.bind(this.index)}
							active={this.state.selectedPlan.active}
							submit={this.submit.bind(this)}
							currentStepNumber={this.state.currentStepNumber}
						/>
					) : (
							(this.state.currentStepNumber === 2) ? (
								<AppUser
									collectData={this.state.collectData}
								/>
							) : (
									<AppReviewOrder
										selectedPlan={this.state.selectedPlan}
										addToPrice={this.addToPrice}
										options={this.state.options}
									/>
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
