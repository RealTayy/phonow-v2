// image stalks mouse with .mai-stalkerDiv
import $ from 'jquery';
import '../../css/maiHelpers/maiStalkerDiv.css';
import { TweenLite } from 'gsap/TweenMax';

export function maiStalkerDiv() {
	(function ($) {
		// Initialize Zoom
		$.fn.maiStalkerDiv = function (stalkers) {
			for (let i = 0; i < stalkers.length; i++) {
				const stalker = stalkers[i];
				$(stalker.selector).css({ transform: `scale(${1 + (stalker.zoom / 50)})` })
			}

			$(window).mousemove((e) => {
				// Tracks mouseX position by PERCENTAGE
				const mouseX = ((e.pageX - $(this).offset().left) / $(this).outerWidth() * 200) - 100
				// Tracks mouseY position by PERCENTAGE
				const mouseY = ((e.pageY - $(this).offset().top) / $(this).outerHeight() * 200) - 100
				// console.log('Tracking', mouseX, mouseY);
				if (Math.abs(mouseX / 100) >= 1 || Math.abs(mouseY / 100) >= 1) return;
				else {
					for (let i = 0; i < stalkers.length; i++) {
						const stalker = stalkers[i];
						TweenLite.to(stalker.selector, stalker.speed, {
							ease: `${stalker.easing}`,
							top: `${mouseY * (stalker.offset / 100)}%`,
							left: `${mouseX * (stalker.offset / 100)}%`,
						});
					}
				}
			});
			return this;
		};
	}($));
}