const $ = require('jquery');

$(function () {


	$(".block-accordion").each(function () {


		var $collapsedIdentifier = "collapsed";
		var $accordion = $(this);
		var $elements = $accordion.find(".block-accordion-element");

		$elements.each(function (index) {

			var $element = $(this);

			// Initially hide all contents except the first
			if (index > 0) {
				hideElement($element, false);
			} else {
				showElement($element, false);
			}


			$(this).find(".block-accordion-element-header").each(function () {

				$(this).click(function (event) {
					event.preventDefault();

					if ($element.data($collapsedIdentifier)) {

						var $currentElement = $(this).closest(".block-accordion-element");

						$elements.each(function () {

							if ($currentElement[0] === $(this)[0]) {
								// Show element
								showElement($element, true);
							} else {
								// Hide all other elements
								hideElement($(this), true);
							}
						});

					} else {
						// Hide element
						hideElement($element, true);
					}

				});

			});

		});

		function showElement($element, animated) {
			$element.find(".block-accordion-element-header").removeClass($collapsedIdentifier);
			$element.data($collapsedIdentifier, false);
			var $content = $element.find(".block-accordion-element-content");
			$content.removeClass($collapsedIdentifier);
			if (animated) {
				$content.slideDown();
			} else {
				$content.show();
			}
		}

		function hideElement($element, animated) {
			$element.find(".block-accordion-element-header").addClass($collapsedIdentifier);
			$element.data($collapsedIdentifier, true);
			var $content = $element.find(".block-accordion-element-content");
			$content.addClass($collapsedIdentifier);
			if (animated) {
				$content.slideUp();
			} else {
				$content.hide();
			}
		}
	});


});

