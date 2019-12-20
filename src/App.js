import React from 'react';
import AppMembership from './AppMembership';
import './style.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<AppMembership />
				<div className="buttons">
					<button className="btn btn-back">Back</button>
					<button className="btn btn-next"> Next</button>
				</div>
			</div>
		)
	}
}

export default App;
