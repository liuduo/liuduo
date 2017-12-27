window.onload = function(){
	
	$('#wrapper').show();
	function carousel() {
		 
	}
	
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > 50) {
            $('.bg-dark-layer').fadeOut(1500);
        }
        if ($(window).scrollTop() < 50) {
            $('.bg-dark-layer').fadeIn(1000);
        }
        });
          var wow = new WOW(
			{
				boxClass:     'wow',
				animateClass: 'animated',
				offset:       0,
				mobile:       true,
				live:         true,
				callback:     function(box) {
				},
				scrollContainer: null
			}
		);
		wow.init();
}