import React, {Component} from "react";
import Icon from "./Icon";

class ContactInformation extends Component {
    render() {
        const {icon, title, information} = this.props;

        return (
            <>
                <Icon name={icon}/>
                <div className="contact-information">
                    <p className="contact-information__name">{title}</p>
                    <span className="bold-text contact-information__data">{information}</span>
                </div>
            </>
        );
    }
}

export default ContactInformation;
