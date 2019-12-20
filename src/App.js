import React from 'react';
import AppMembership from './AppMembership';
import AppUser from './AppUser';
import './style.css';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			screens: [
				'AppMembership',
				'AppUser'
			],
			currentStepNumber: 1,
			selectedPlan: null,
		};
		this.isLastStep = this.isLastStep.bind(this);
		this.progress = this.progress.bind(this);
		this.nextButtonAction = this.nextButtonAction.bind(this);
		this.goBack = this.goBack.bind(this);
	};
	isLastStep = () => {
		return this.state.currentStepNumber === this.state.screens.length;
	};
	progress = () => {
		return (this.state.currentStepNumber / this.state.screens.length()) * 100;
	};
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
	}

	render() {
		return (
			<div>
				{(this.state.currentStepNumber === 1) ? (
					<AppMembership selectedPlan={this.state.selectedPlan} />
				) : (
						<AppUser />
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
