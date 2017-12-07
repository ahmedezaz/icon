
        /*Fixed-Scroller
        * ----------------------------------------------------------------------------*/
      var offset=300,scroll_top_duration=700,$back_to_top=$('.scroller');
     $(window).scroll(function(){
      ($(this).scrollTop()>offset)?$back_to_top.addClass('back-to-top-is-visible'):$back_to_top.removeClass('back-to-top-is-visible');
     });

     $back_to_top.on('click',function(event){
     event.preventDefault();
     $('body,html').animate({scrollTop:0,},scroll_top_duration);
     });
