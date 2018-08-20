import React, { Component } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

export class Carousel extends Component {
	render() {
		const settings = {
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			// adaptiveHeight: true,
			// dots: false,
		}
		console.log(this.props);
		return (
			<Slider className="_Carousel" {...settings}>
				{this.props.images.map((src, i) => {
					return <img key={i} src={src} />
				})}
			</Slider>
		)
	}
}

export default Carousel
