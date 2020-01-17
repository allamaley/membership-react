import React from 'react';
import './style.css';

class FormName extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label className="form-label" htmlFor="name">Name</label>
				<input
					type="text"
					placeholder="Nice name"
					className="form-control"
					id="name"
					name="name"
					value={this.props.memberData}
					onKeyUp={this.props.checkInput}
					onBlur={this.props.handleChange}
				/>
				<div className="error" style={{ display: this.props.validName ? 'none' : 'block' }}>name is required</div>
			</div>
		);
	}
}

export default FormName;

