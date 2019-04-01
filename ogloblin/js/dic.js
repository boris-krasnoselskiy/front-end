$(document).ready(function() {
	if($('#tab-wrap').length) {
	  var tabWrapper = $('#tab-wrap'),
	      tabMnu = tabWrapper.find('.tab-mnu  li'),
	      tabContent = $('.tab-cont > .tab-pane');

		  tabContent.not(':first-child').hide();

		  tabMnu.each(function(i) {
		    $(this).attr('data-tab','tab'+i);
		  });
		  tabContent.each(function(i) {
		    $(this).attr('data-tab','tab'+i);
		  });

		  tabMnu.click(function() {
		    var tabData = $(this).data('tab');
		    tabContent.hide();
		    tabContent.filter('[data-tab='+tabData+']').show();
		  });

		  $('.tab-mnu > li').click(function(){
		    var before = $('.tab-mnu li.active');
		    before.removeClass('active');
		    $(this).addClass('active');
		   });
	}
	var $dylay = jQuery('#dylay');

	// init
	$dylay.dylay({
	// speed of animation
		speed: 1500,
	// make your animation yummy
		easing: 'easeOutElastic',
	// selector to define elements
		selector: '>li'
	});

	// controls
	jQuery('#filters a').on('click', function () {
		$dylay.dylay('filter', jQuery(this).data('filter'));
		return false;
	})

	jQuery('#sorts a').on('click', function () {
		$dylay.dylay('sort', jQuery(this).data('sort-by'), jQuery(this).data('sort-way'))
		return false;
	})
});
