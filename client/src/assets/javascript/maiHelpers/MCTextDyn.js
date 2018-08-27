// Resize font with class .mai-textdyn
import $ from 'jquery';

// Initialize elements on document ready
$(() => {
	$('.mai-textdyn').each(function () {
		$(this).css({
			'font-size': $(this).height(),
			'line-height': $(this).height() + 'px'
		})
	})
})

// Dynamically changes size on window resize
$(window).resize(function () {
	$('.mai-textdyn').each(function () {
		$(this).css({
			'font-size': $(this).height(),
			'line-height': $(this).height() + 'px'
		})
	})
})