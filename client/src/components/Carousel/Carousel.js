import React, { Component } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

export class Carousel extends Component {
	render() {
		const settings = this.props.settings || {
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			pauseOnHover: false,
		}
		return (
			<Slider className="_Carousel" {...settings}>
				{this.props.imagesPath.map((src, i) => {
					return <img key={i} src={src} alt="" />
				})}
			</Slider>
		)
	}
}

export default Carousel
