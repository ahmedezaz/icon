/**
 * Created by EZAZ on 29/5/2016.
 */
(function ($) {
    "use strict";

    $(window).load(function(){
     $('#loading').fadeOut(1500);
    });



    $(document).ready(function() {


         /*Multi-color-picker
         -------------------------------------------------------------*/


       $("span.red_color").click(function(){
        $("body").addClass("red_color_bar") .removeClass("blue_color_bar yellow_color_bar green_color_bar black_color_bar purple_color_bar");


       });

         $("span.blue_color").click(function(){
        $("body").addClass("blue_color_bar") .removeClass("red_color_bar yellow_color_bar green_color_bar black_color_bar purple_color_bar");


       });

            $("span.yellow_color").click(function(){
        $("body").addClass("yellow_color_bar") .removeClass("red_color_bar blue_color_bar green_color_bar black_color_bar purple_color_bar");


       });


            $("span.green_color").click(function(){
        $("body").addClass("green_color_bar") .removeClass("red_color_bar blue_color_bar yellow_color_bar black_color_bar purple_color_bar");


       });
             $("span.black_color").click(function(){
        $("body").addClass("black_color_bar") .removeClass("red_color_bar blue_color_bar yellow_color_bar green_color_bar purple_color_bar");


       });

             $("span.purple_color").click(function(){
        $("body").addClass("purple_color_bar") .removeClass("red_color_bar blue_color_bar yellow_color_bar green_color_bar black_color_bar");


       });


                   $(".spinner").click( function(event){
        event.preventDefault();
        if ( $(this).hasClass(".inout") ) {
        $(".demo_panel_box").stop().animate({left:"-200px"}, 500);
        } else {
        $(".demo_panel_box").stop().animate({left:"0px"}, 500);
        }
        $(this).toggleClass(".inout");
        return false;
        });





        /* Scrolling Smoothly
         * ----------------------------------------------------------------------------------------*/
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });






         /*SIDE NAV
         * ----------------------------------------------------------------------------------------*/
        $("#nav-btn").on('click', function() {
            $("#side-nav").animate({right: 0}, 'medium');
            $("#side-nav-mask").addClass('visible');
        });
        $("#side-nav-mask").on('click', function() {
            $("#side-nav").animate({right: -250}, 'medium');
            $("#side-nav-mask").removeClass('visible');
        });





        /* NAVBAR SCROLLING
        * ----------------------------------------------------------------------------*/
        var scroll_start = 0;
        var startchange = $('.navbar-inverse');
        var offset = startchange.offset();
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.navbar-inverse').css('background-color', 'rgba(0,0,0,.75)');
            } else {
                $('.navbar-inverse').css('background-color', 'transparent');
            }
        });







      

/*Portfolio
--------------------------------------------------------------------*/



/* activate jquery isotope */
  $('.portfolio_items').isotope({
    itemSelector : '.item',
    layoutMode:'fitRows'
  });

  

    // filter items on button click
  $('.portfolio_filter li').click(function() {

    $('.portfolio_filter li').removeClass("active");

    $(this).addClass("active");

    var selector=$(this).attr('data-filter');

    $(".portfolio_items").isotope({

        filter:selector,
        animationOptions:{

          duration:750,
          easing:'linear',
          queue:false
        }
    });

    return false;
  

  });








    });

})(jQuery);