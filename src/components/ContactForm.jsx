import React, {Component} from "react";
import axios from "axios";
import fieldsConfig from "../data/contact_config";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sent: false,
			error: false,
			fields: {
				firstName: '',
				lastName: '',
				email: '',
				message: ''
			},
			messages: {
				title: "Contact Me",
				success: "Thank you for contcting me.",
				error: "Sorry we have some problems.",
			}
		};
	}

	handleChange = e => {
		this.setState({fields: {...this.state.fields, [e.target.name]: e.target.value}});
	};

	handleFormSubmit = e => {
		axios({
			url: 'contact',
			data: this.state
		}).then(() => {
			this.setState({sent: true});
		}).catch(() => {
			this.setState({error: true});
		})
	};

	render() {
		const {success, error} = this.state.messages;

		return (
			<form action="#">
				{fieldsConfig &&
				fieldsConfig.map(field => {
					return (
						<React.Fragment key={field.id}>
							{field.type !== "textarea" ? (
								<React.Fragment>
									<label>{field.label}</label>
									<input
										name={field.name}
										type={field.type}
										className={field.className}
										placeholder={field.placeholder}
										onChange={e => this.handleChange(e)}
									/>
								</React.Fragment>
							) : (
								<React.Fragment>
									<label>{field.label}</label>
									<textarea
										className={field.className}
										placeholder={field.placeholder}
										onChange={e => this.handleChange(e)}
									/>
								</React.Fragment>
							)}
						</React.Fragment>
					);
				})}
				<input
					className=" button primary-button"
					type="submit"
					onClick={e => this.handleFormSubmit(e)}
					value="Submit"
				/>
				<div>
					{this.state.sent && <div className="success">{success}</div>}
					{this.state.error && <div className="error">{error}</div>}
				</div>
			</form>
		);
	}
}

export default ContactForm;
