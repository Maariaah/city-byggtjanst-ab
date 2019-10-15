import React from "react";
import {Link} from "react-router-dom";
import routes from "../../routes";
import contact from "../../data/contact.js";
import Icon from "../Icon";

const Footer = () => {
	const links = routes.filter(item => item.showInFooter);

	return (
		<footer>
			<div className="top-footer center">
				<ul>
					{contact.map(
						(item, index) =>
							index < 3 && (
								<li key={index}>
									<Icon name={item.icon}/>
									<span>{item.information}</span>
								</li>
							)
					)}
				</ul>
			</div>
			<div className="bottom-footer center clearfix">
				<ul className="left footer-links footer-links__left">
					<li>
						<span>Pages</span>
						<ul>
							{links.map((route, index) => (
								<li key={index}>
									<Link to={route.path}> {route.name} </Link>
								</li>
							))}
						</ul>
					</li>
					<li>
						<span>Terms and Conditions</span>
						<ul>
							<li>Link1</li>
							<li>Link2</li>
							<li>Link3</li>
						</ul>
					</li>
				</ul>
				<ul className="right footer-links footer-links__right">
					<li>Copyright - citybiggtjanst 2018.</li>
					<ul className="social-icons">
						<li>
							<a
								href="https://www.facebook.com/citybyggtjanstab/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon name="icon-facebook"/>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/city_byggtjanst_ab/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon name="icon-instagram"/>
							</a>
						</li>
					</ul>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
