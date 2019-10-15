import React, {Component} from "react";
import certificate1 from "../assets/images/certificate_1.png";
import certificate2 from "../assets/images/certificate_2.png";
import SingleCertificate from "./SingleCertificate";

class Certificates extends Component {
	render() {
		return (
			<section className="certificates auto-container">
				<h2 className="title">Our certificates</h2>
				<p>These are some of our certificates...</p>
				<ul>
					<li>
						<SingleCertificate
							image={certificate1}
							icon="icon-license"
							title="Certificate 1"
							alt="Certificate 1"
							description="Some descrption about this certificate"
						/>
					</li>
					<li>
						<SingleCertificate
							image={certificate2}
							icon="icon-license"
							title="Certificate 2"
							alt="Certificate 2"
							description="Some descrption about this certificate"
						/>
					</li>
					<li>
						<SingleCertificate
							image={certificate1}
							icon="icon-license"
							title="Certificate 3"
							alt="Certificate 3"
							description="Some descrption about this certificate"
						/>
					</li>
				</ul>
			</section>
		);
	}
}

export default Certificates;
