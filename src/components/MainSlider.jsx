import React, {Component} from "react";
import Button from "./Button.jsx";
import Slider from "react-slick";
import images from "../data/slider_images.js";

class MainSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: images
		};
	}

	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: "linear",
			arrows: true
		};
		const {slides} = this.state;

		return (
			<section>
				<Slider {...settings}>
					{slides.map((image, index) => (
						<div className="slider-wrapper" key={index}>
							<div className="slider-content-wrapper">
								<h2>{slides[index].title}</h2>
								<div className="hero-buttons">
									<Button
										class="button primary-button primary-button_light-hover"
										title="Contact us"
										path="./contact-us"
									/>
									<Button
										class="button secondary-button"
										title="Our services"
										path="./Renovations"
									/>
								</div>
							</div>
							<div className="image-wrapper hero-image-wrapper">
								<img
									src={slides[index].src}
									className="slide"
									alt={slides[index].alt}
								/>
							</div>
						</div>
					))}
				</Slider>
			</section>
		);
	}
}

export default MainSlider;
