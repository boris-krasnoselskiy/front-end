$(document).ready(function() {

  var auto_scroll = false;
  $(window).scroll(function(){
    if( 0 == $(window).scrollTop() ){
      $(".scroll-top").hide();
    } else {
      if(!auto_scroll)
        $(".scroll-top").show();
    }
  });
  $(".scroll-top").click(
    function() {
      $(this).hide();
      auto_scroll = true;
      $( "body,html" ).animate( {scrollTop: 0 }, 800);
      setTimeout(function() { auto_scroll = false; }, 800 );
      return false;
    }
  );

  minimizeWidget();

  if($(".js_select").length) {
    $(".js_select").styler();
  }

  $(".nested").hover(
    function(){
      $(this).closest(".nested").siblings("a").toggleClass("hovered");
    },
    function(){
      $(this).closest(".nested").siblings("a").toggleClass("hovered");
    }
  );

  $(".broad_nav_mobile").on("click", function() {
    $(this).toggleClass("opened");
  });

  $(".js_place").css("visibility", "hidden");

  $(".wrapper").css({
    "padding-bottom": $("footer").height() + 36
  });

  $(".js_marker").each(function() {
    var pos_x = $(this).attr("data-position-x");
    var pos_y = $(this).attr("data-position-y");
    $(this).css({
      "top": pos_y + "px",
      "left": pos_x + "px"
    });
  })

  $(".js_marker").on("mouseenter", function() {
    var place = $(this).attr("data-place-name");
    $(".js_place").css("visibility", "visible");
    $(".js_city-name").html(place);
  })

  if($('.js_collaps').length) {
    $('.js_collaps .header').on('click', function() {
      $(this).find(".arrow i").toggleClass('rotated');
      $(this).siblings(".content").toggle();
    });
  }

  // $(".js_animated")
  //   .mouseenter(function() {
  //     $(this).addClass("hovered");
  //     // $(this).find(".text").show();
  //   })
  //   .mouseleave(function() {
  //     $(this).removeClass("hovered");
  //     // $(this).find(".text").hide();
  //   });

  // $(".js_hovered")
  //   .mouseenter(function() {
  //     $(this).find(".js_streched").show();
  //   })
  //   .mouseleave(function() {
  //     $(this).find(".js_streched").hide();
  //   });
});

$(window).resize(function() {
  minimizeWidget();
});

$(".search-icon").on("click", function() {
  $(".search_wrap").toggle();
});


function minimizeWidget() {
  if($(window).width() > 1683) {
    $(".widgets").removeClass().addClass("widgets big");
  } else {
    $(".widgets").removeClass().addClass("widgets collapsed");
  }
}

function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');

  $(".bottom_line .nav li").last().toggle();
  $(".search-input").focus();

  if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
  }
  else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        // clear and hide result container when we press close
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
  }
}

function submitFn(obj, evt){
    value = $(obj).find('.search-input').val().trim();

    _html = "Yup yup! Your search text sounds like this: ";
    if(!value.length){
        _html = "Yup yup! Add some text friend :D";
    }
    else{
        _html += "<b>" + value + "</b>";
    }

    $(obj).find('.result-container').html('<span>' + _html + '</span>');
    $(obj).find('.result-container').fadeIn(100);

    evt.preventDefault();
}