(function($) {
  'use strict';

  $.fn.andSelf = function() {
    return this.addBack.apply(this, arguments);
  }

  /* Loader Code Start */
  $(window).on("load", function() {
    $(".section-loader").fadeOut("slow");

    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            queue: true
        }
    });

    $('.portfolio-nav li').click(function(){
        $('.portfolio-nav .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                queue: true
            }
          });
          return false;
    });
  });
  /* Loader Code End */

  /*
  |=================
  | Onepage Nav
  |================
  */

    $('#mh-header').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
    });

  /*
  |===============
  | WOW ANIMATION
  |==================
  */
    var wow = new WOW({
        mobile: false  // trigger animations on mobile devices (default is true)
    });
    wow.init();


  /*
  | ==========================
  | NAV FIXED ON SCROLL
  | ==========================
  */
  $(window).on('scroll', function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          $(".nav-scroll").addClass("nav-strict");
      } else {
          $(".nav-scroll").removeClass("nav-strict");
      }
  });

  /*
  |================
  | Smooth Scroll
  |================
  */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 600);
          return false;
        }
      }
    });
  });

}(jQuery));
