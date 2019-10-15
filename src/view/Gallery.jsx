import React, {Component} from "react";
import Lightbox from "react-image-lightbox";
import images from "../data/gallery_images";
import Meta from "../components/layout/Meta";

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen: false
		};
	}

	render() {
		const {photoIndex, isOpen} = this.state;
		return (
			<React.Fragment>
				<Meta title="Gallery strana" description="Opis strane" image="slika.jpg"/>
				<div className="center content gallery">
					<section className="auto-container">
						<h2 className="title">Gallery</h2>
						<ul className="gallery-images clearfix">
							{images.map((image, index) => (
								<li key={index} onClick={() => this.setState({isOpen: true})}>
									<img src={image.src} alt={images.alt}/>
								</li>
							))}
						</ul>

						{isOpen && (
							<Lightbox
								mainSrc={images[photoIndex].src}
								nextSrc={images[(photoIndex + 1) % images.length].src}
								prevSrc={
									images[(photoIndex + images.length - 1) % images.length].src
								}
								onCloseRequest={() => this.setState({isOpen: false})}
								onMovePrevRequest={() =>
									this.setState({
										photoIndex: (photoIndex + images.length - 1) % images.length
									})
								}
								onMoveNextRequest={() =>
									this.setState({
										photoIndex: (photoIndex + 1) % images.length
									})
								}
							/>
						)}
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default Gallery;
