$(':text').focusin(function () {
	
	$(this).css('background-color', 'red');
});
$(':text').blur(function() {
	
	$(this).css('background-color', '#fff');
});