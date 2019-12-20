import React from 'react';
import './style.css';

class FormEmail extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label className="form-label" htmlFor="email">Email</label>
				<input
					type="email"
					placeholder="test@email.com"
					className="form-control"
					id="email"
					onBlur={this.props.checkInput}
				/>
				<div className="error info">
					<a href="/">Reset</a>
				</div>
				<div className="error" style={{ display: this.props.validEmail ? 'none' : 'block' }}>email is invalid</div>
			</div>
		);
	}
}

export default FormEmail;

