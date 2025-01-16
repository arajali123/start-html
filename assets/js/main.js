/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function ($) {
   "use strict";

   // Data Js
	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});
})(jQuery);
