import React from 'react';
import FormEmail from './FormEmail';
import FormPassword from './FormPassword';
import FormName from './FormName';
import './style.css';


class AppUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			validEmail: true,
			validPassword: true,
			validName: true,
		};
		this.validateEmail = this.validateEmail.bind(this);
		this.validateText = this.validateText.bind(this);
		this.checkInput = this.checkInput.bind(this);
	};


	checkInput = (e) => {
		const value = e.target.value;
		const type = e.target.type;
		const validation = type === 'email' ? this.validateEmail(value)
			: this.validateText(value);
		console.log(validation);
		if (type === 'email') {
			this.setState({
				validEmail: validation ? true : false
			});
		} else if (type === 'password') {
			this.setState({
				validPassword: validation ? true : false
			});
		} else if (type === 'text') {
			this.setState({
				validName: validation ? true : false
			});
		}

	};

	validateEmail(email) {
		const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
		if (email.match(regex)) {
			return true
		}
		return false
	};

	validateText(text) {
		if (text !== '') {
			return true
		}
		return false
	};

	render() {

		return (
			<div>
				<h1 className="title">Account master</h1>

				<h2 className="subtitle">Create an account or log in:</h2>
				<form className="form">
					<FormEmail
						checkInput={this.checkInput.bind(this)}
						validEmail={this.state.validEmail}
					/>
					<FormPassword
						checkInput={this.checkInput.bind(this)}
						validPassword={this.state.validPassword}
					/>
					<FormName
						checkInput={this.checkInput.bind(this)}
						validName={this.state.validName}
					/>

				</form>
			</div>
		);
	}
}

export default AppUser;
