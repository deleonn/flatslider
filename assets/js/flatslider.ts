var flatSlider = (function($){

// Slider function
  var slider = function(timeout: int, height: int){

    // Initial configuration to add css properties without adding them in the html
    var $height = $('.images').css("height", (height) + 'vh');
    var $slideClass = $('.images').children().addClass('slide');
    var $activeSlide = $('.images').children().first().addClass('active-slide');


// Slider functionalities with an interval of time
    var init = (function(){
      var currentSlide = $('.active-slide');
      var nextSlide = $('.active-slide').next();

      if (nextSlide.length === 0) {
        nextSlide = $('.slide').first();
      }

      currentSlide.fadeOut(600).removeClass('active-slide');
      nextSlide.fadeIn(600).addClass('active-slide');

// Next slide
    $('.next').click(function(){
      clearInterval(interval);
      var currentSlide = $('.active-slide');
      var nextSlide = $('.active-slide').next();

      if (nextSlide.length === 0) {
        nextSlide = $('.slide').first();
      }

      currentSlide.fadeOut(600).removeClass('active-slide');
      nextSlide.fadeIn(600).addClass('active-slide');

    });

// Prev slide
    $('.prev').click(function(){
      clearInterval(interval);
      var currentSlide = $('.active-slide');
      var prevSlide = $('.active-slide').prev();

      if (prevSlide.length === 0) {
        prevSlide = $('.slide').last();
      }

      currentSlide.fadeOut(600).removeClass('active-slide');
      prevSlide.fadeIn(600).addClass('active-slide');

    });

  });

// Interval timeout
    var interval = setInterval(function(){
      init();
    }, timeout);

  };

  return {
    slider: slider
   };


})(jQuery);
