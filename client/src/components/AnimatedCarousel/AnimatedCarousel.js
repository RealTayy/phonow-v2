import React, { Component } from 'react';
import Slider from 'react-slick';
import './AnimatedCarousel.css';
import $ from 'jquery';

export class AnimatedCarousel extends Component {
	render() {
		const settings = this.props.settings || {
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			accessibility: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			pauseOnHover: false,
			beforeChange: (oldIndex, newIndex) => {
				let $allImg = $(`.${this.props.parentClass} ._AnimatedCarousel .slick-slide img`);
				let $newImg = $(`.${this.props.parentClass} ._AnimatedCarousel .slick-slide[data-index=${newIndex}] img`);
				console.log(oldIndex);
				$allImg.removeClass('fadeInRight');
				$allImg.addClass('fadeOutLeft');
				$newImg.removeClass('fadeOutLeft');
				$newImg.addClass('fadeInRight');
			},
			draggable: false,
			swipe: false,
		}
		return (
			<Slider className="_AnimatedCarousel" {...settings}>
				{this.props.imagesPath.map((src, i) => {
					return <img className="animated" key={i} src={src} alt="" />
				})}
			</Slider>
		)
	}
}

export default AnimatedCarousel
