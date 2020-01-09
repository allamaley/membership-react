import React from 'react';
import './style.css';

class Option extends React.Component {
	render() {
		return (
			<label className="container" htmlFor="unicorn">
				+ {this.props.options.price} {this.props.options.name}
				<input
					type="checkbox"
					id="unicorn"
					name={this.props.options.name}
					onChange={this.props.addToPrice}
				/>
				<span className="checkmark"></span>
			</label>
		);
	}
}

export default Option;
