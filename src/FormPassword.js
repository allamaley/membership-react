import React from 'react';
import './style.css';

class FormPassword extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label className="form-label" htmlFor="password">Password</label>
				<input
					type="password"
					placeholder="Password"
					className="form-control"
					id="password"
					onKeyUp={this.props.checkInput}
				/>
				<div className="error" style={{ display: this.props.validPassword ? 'none' : 'block' }}>
					password is invalid - try again
				</div>
			</div>
		);
	}
}

export default FormPassword;

