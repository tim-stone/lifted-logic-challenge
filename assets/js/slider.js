$(document).ready(function(){

  $('.slider').slick({
    centerMode: true,
    centerPadding: '5px',
    slidesToShow: 3,
    arrows: true,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          touchMove: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          touchMove: true
        }
      }
    ]
  });

});
