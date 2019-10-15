import React, {Component} from "react";
import Certificates from "../components/Certificates.jsx";
import Introduction from "../components/Introduction.jsx";
import MainSlider from "../components/MainSlider.jsx";
import Meta from "../components/layout/Meta";

class Homepage extends Component {
	render() {
		return (
			<React.Fragment>
				<Meta title="Home strana" description="Opis strane" image="slika.jpg"/>
				<MainSlider/>
				<div className="home content">
					<Introduction/>
					<Certificates/>
				</div>
			</React.Fragment>
		);
	}
}

export default Homepage;
