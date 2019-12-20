import React from 'react';
import './style.css';

class AppUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	};


	render() {

		return (
			<div>
				<h1 className="title">Account master</h1>

				<h2 className="subtitle">Create an account or log in:</h2>
				<form className="form">
					<div className="form-group">
						<label className="form-label" htmlFor="email">Email</label>
						<input
							type="text"
							placeholder="test@email.com"
							className="form-control"
							id="email"
						/>
						<div className="error info">
							<a href="#">Reset</a>
						</div>
						<div className="error">email is required</div>
						<div className="error">email is invalid</div>
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="password">Password</label>
						<input
							type="password"
							placeholder="Password"
							className="form-control"
							id="password"
						/>
						<div

							className="error"
						>password is required</div>
						<div

							className="error"
						>password is invalid - try again</div>
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="name">Name</label>
						<input
							type="text"
							placeholder="Nice name"
							className="form-control"
							id="name"
						/>
						<div className="error">name is required</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AppUser;
