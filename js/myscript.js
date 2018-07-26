$(document).ready(function () {
	$('.validate-int').live('paste keydown keyup', function () {
		var str = $(this).val();
		var reg = /[^0-9]+/;	
		if (str.match(reg) !== null) {
			$(this).val(str.replace(reg, ''));
		}
	}); 
});