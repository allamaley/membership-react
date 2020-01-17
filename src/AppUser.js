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
			emailCheckedInDB: false,
			existingUser: false,
			loggedIn: false
		};
		this.validateEmail = this.validateEmail.bind(this);
		this.validateText = this.validateText.bind(this);
		this.checkInput = this.checkInput.bind(this);
		this.checkIfUserExists = this.checkIfUserExists.bind(this);
	};


	checkInput = (event) => {
		const { value, type } = event.target;
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

	checkIfUserExists() {
		if (!this.state.validEmail) {
			fetch('./api')
				.then(response => response.json())
				.then(data => console.log(data))
			// 	return checkIfUserExistsInDB(this.form.email)
			// 		.then(() => {
			// 			// USER EXISTS
			// 			this.state.existingUser = true;
			// 			this.state.emailCheckedInDB = true;
			// 			this.$emit("updateAsyncState", "success");
			// 		})
			// 		.catch(() => {
			// 			// USER DOESN'T EXIST
			// 			this.state.existingUser = false;
			// 			this.state.emailCheckedInDB = true;
			// 			this.$emit("updateAsyncState", "success");
			// 		});
			// } else {
			// 	return Promise.reject("email is invalid");
			// }
		}
	}

	submit = () => {
		// let job;
		if (!this.state.emailCheckedInDB) {
			// job = this.checkIfUserExists();
		} else {
			if (this.state.existingUser && !this.state.loggedIn) {
				// job = this.login();
			} else {
				// new user is typing info manually
				// job = Promise.resolve();
			}
		}

		// return new Promise((resolve, reject) => {
		// 	job
		// 		.then(() => {
		// 			if (!this.$v.$invalid) {
		// 				resolve({
		// 					email: this.form.email,
		// 					password: this.form.password,
		// 					name: this.form.name
		// 				});
		// 			} else {
		// 				reject("data is not valid yet");
		// 			}
		// 		})
		// 		.catch(error => reject(error));
		// });
	};


	render() {

		return (
			<>
				<h1 className="title">Account master</h1>

				<h2 className="subtitle">Create an account or log in:</h2>
				<form className="form">
					<FormEmail
						value={this.props.memberData}
						checkInput={this.checkInput.bind(this)}
						validEmail={this.state.validEmail}
						handleChange={this.props.handleChange}
					/>
					<FormPassword
						value={this.props.memberData}
						checkInput={this.checkInput.bind(this)}
						validPassword={this.state.validPassword}
					/>
					<FormName
						value={this.props.memberData}
						checkInput={this.checkInput.bind(this)}
						validName={this.state.validName}
						handleChange={this.props.handleChange}
					/>

				</form>
			</>
		);
	}
}

export default AppUser;
