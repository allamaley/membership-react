import React from 'react';
import './style.css';

class Option extends React.Component {
	render() {
		return (
			<label className="container" htmlFor={this.props.options.name}>
				+ {this.props.options.price} {this.props.options.name}
				<input
					type="checkbox"
					id={this.props.options.name}
					name={this.props.options.name}
					onChange={this.props.addToPrice}
				/>
				<span className="checkmark"></span>
			</label>
		);
	}
}

export default Option;
