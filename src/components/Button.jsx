import {Link} from "react-router-dom";
import React from "react";

function Button(props) {
	return (
		<Link className={props.class} to={props.path}>
			{props.title}
		</Link>
	);
}

export default Button;
