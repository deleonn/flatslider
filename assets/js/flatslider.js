var flatSlider = (function($){

// Slider function
  var slider = function(timeout, height){

    // Initial configuration to add css properties without adding them in the html
    var $height = $('.images').css("height", (height) + '%');

// Next slide
    $('.next').click(function(){
      var currentSlide = $('.active-slide');
      var nextSlide = $('.active-slide').next();


      var currentDot = $('.active-dot');
      var nextDot = $('.active-dot').next();

      if (nextSlide.length === 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
      }

      currentSlide.fadeOut(100).removeClass('active-slide');
      nextSlide.fadeIn(400).addClass('active-slide');

      currentDot.removeClass('active-dot');
      nextDot.addClass('active-dot');

    });

// Prev slide
    $('.prev').click(function(){
      var currentSlide = $('.active-slide');
      var prevSlide = $('.active-slide').prev();

      var currentDot = $('.active-dot');
      var prevDot = $('.active-dot').prev();

      if (prevSlide.length === 0) {
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
      }

      currentSlide.fadeOut(100).removeClass('active-slide');
      prevSlide.fadeIn(400).addClass('active-slide');

      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');

    });

    $('.dot').click(function(){
      var index = $(this).index() + 1;

      var currentSlide = $('.active-slide');
      var indexSlide = $('.active-slide');
      var currentDot = $('.active-dot');
      var indexDot = $('.active-dot');


      if (index === $(this).index() + 1) {
        indexSlide = $('.slide:nth-child('+index+')');
        indexDot = $('.dot:nth-child('+index+')');

        currentSlide.fadeOut(100).removeClass('active-slide');
        indexSlide.fadeIn(400).addClass('active-slide');

        currentDot.removeClass('active-dot');
        indexDot.addClass('active-dot');
      }
    });


  };

  return {
    slider: slider
   };


})(jQuery);
