$(document).ready(function() {

	if($('#tab-block').length) {
	  var tabWrapper = $('#tab-block'),
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

});