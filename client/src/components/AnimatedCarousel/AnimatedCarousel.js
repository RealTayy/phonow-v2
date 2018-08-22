import React, { Component } from 'react';
import Slider from 'react-slick';
import './AnimatedCarousel.css';

export class AnimatedCarousel extends Component {
	render() {
		const settings = this.props.settings || {
			autoplay: false,
			autoplaySpeed: 4000,
			arrows: false,
		}
		return (
			<Slider className="_AnimatedCarousel" {...settings}>
				{this.props.imagesPath.map((src, i) => {
					return <img key={i} src={src} alt="" />
				})}
			</Slider>
		)
	}
}

export default AnimatedCarousel
