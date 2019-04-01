$(document).ready(function() {
	$('js_select, .js_browse').styler();

 	var $appeared = $('#appeared');
  var $disappeared = $('#disappeared');

  $('footer').appear();

  $(document.body).on('appear', '.department', function(e, $affected) {
    // this code is executed for each appeared element

    console.log("12");

    $appeared.empty();
    $affected.each(function() {
      $appeared.append(this.innerHTML+"\n");
    })
  });

  $(document.body).on('disappear', 'section h3', function(e, $affected) {
    // this code is executed for each disappeared element
    $disappeared.empty();
    $affected.each(function() {
      $disappeared.append(this.innerHTML+"\n");
    })
  });



	$('footer').appear(function() {
	  $(this).text('Hello world');
	});

	$('.write').appear(function() {
	  $(this).text('Hello world');
	});

	if($(window).width() > 992) {
		// $(".write").css("right", $(".heading").offset().left-27)
	}
});

function isInView(elem){
   return $(elem).offset().top - $(window).scrollTop() < $(elem).height();
   console.log($(elem).offset().top);
   console.log($(window).scrollTop());
   console.log($(elem).height());
}

$(window).scroll(function(){
	isInView($('.subscribe'));
	// if (isInView($('footer')))
	var container_height = $('.vacancies_row').height(),
		  top_offset_form = $('.write').offset().top - $('.write').height(),
		  scrollTop = $(window).scrollTop();
		  // console.log(top_offset_form);
		  if(scrollTop > container_height - 100) {
		  }
	// if(container_height >= top_offset_form) {
	// 	$('.write').css({
	// 		"position": "fixed",
	// 		"top": "318px"
	// 	});
	// } else {
	// 	$('.write').css({
	// 		"position": "absolute",
	// 		"top": "0",
	// 		"right": "0!important"
	// 	});
	// }
});