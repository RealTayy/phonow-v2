// Resize font with class .mai-textdyn
import $ from 'jquery';

// Initialize elements on document ready
export function maiTextDyn() {
	$(() => {
		$('.mai-textDyn').each(function () {
			$(this).css({
				'font-size': $(this).height()				
			})
		})
	});

	// Dynamically changes size on window resize
	$(window).resize(function () {
		$('.mai-textDyn').each(function () {
			$(this).css({
				'font-size': $(this).height()				
			})
		})
	});
}