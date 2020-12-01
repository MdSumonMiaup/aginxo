/*
        About          
=========================
/*
 Theme Name: Aginxo - HTML5 Business Template
 Theme URI: https://thew3lab.xyz/template/aginxo/
 Author URI: https://thew3lab.xyz
*/

jQuery(document).ready(function($){
  
/*
      Table Index       
========================
1. Preloader
2. Responsive Menu
3. Portfolio Filtering
4. Magnific Popup
5. Slick Slider
6. Button Hover Effect
7. Back to Top
8. Contact Us Form
*/

  "use strict";
  
/*=====| 1. Preloader |=====*/
var loader = function() {
  setTimeout(function() { 
    if($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show');
    }
  }, 1);
};
loader();
  
/*=====| 2. Responsive Menu |=====*/
  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
    meanMenuClose: "X",
    meanMenuCloseSize: "18px",
    meanExpand: "+",
    meanContract: "-",
    onePage: false,
  });

/*=====| 3. Portfolio Filtering |=====*/
  var $grid =  $('.all-project').isotope({
    itemSelector: '.project',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 0
    }
    
  });

  // filter items on button click
  $('.portfolio-manu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  // for menu active 
  $('.portfolio-manu button').on('click', function (event) {
    $(this).siblings('.filter-active').removeClass('filter-active');
    $(this).addClass('filter-active');
    event.preventDefault();
  });


/*=====| 4. Magnific Popup |=====*/

  // for video popup
  $('.popup-video').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
          // youtube support
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: 'http://www.youtube.com/embed/%id%?autoplay=1'
          },
          // vimeo support
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: 'https://player.vimeo.com/video/%id%?autoplay=1'
          },
        }
    }
  });

  // for gallery popup
  $('.popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });

/*=====| 5. Slick Slider |=====*/
  // Slider for Feedback
  $('.all-feedback-slider').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    waitForAnimate: false,
    useTransform: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // for tab display issue refresh
  $(".rating-btn").click(function(){
    $('.all-feedback-slider').slick('refresh');
  });
    
  // Vertical Slider for FAQ 
  $('.all-faqs').slick({
    dots: false,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

/*=====| 6. Button Hover Effect |=====*/
  $(".secondery-btn, .primary-btn")
  .on("mouseenter", function (e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    $(this).find("span").css({ top: relY, left: relX });
  })
  .on("mouseout", function (e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    $(this).find("span").css({ top: relY, left: relX });
  });

});
// Document.ready function end here

/*=====| 7. Back to Top |=====*/
var btn = $('.scroll-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});

/*=====| 8. Contact Us Form |=====*/
(function ($) {
  'use strict';

  $('.msg-submit').on("click", function() {
    document.getElementById("get-name").innerHTML = document.getElementById("name").value;
  });
  
  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  // Success function
  function done_func(response) {
      message.fadeIn().removeClass('alert-danger').addClass('alert-success');
      message.text(response);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
      form.find('input:not([type="submit"]), textarea').val('');
  }

  // fail function
  function fail_func(data) {
      message.fadeIn().removeClass('alert-success').addClass('alert-success');
      message.text(data.responseText);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
  }
  
  form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();
      $.ajax({
          type: 'POST',
          url: form.attr('action'),
          data: form_data
      })
      .done(done_func)
      .fail(fail_func);
  });
  
})(jQuery);
