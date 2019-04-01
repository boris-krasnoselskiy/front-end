$(document).ready(function () {

  $(".blockquote").each(function() {
    $(this).find("p").last().prepend("<span class='inserted blue_color'>«</span>");
    $(this).find("p").last().append("<span class='inserted blue_color'>»</span>");
  })


  $(".top_slider").slick({
  	// autoplay: true,
    infinite: true,
    arrow: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".reviews_slider").slick({
  	autoplay: true,
    infinite: true,
    arrow: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});