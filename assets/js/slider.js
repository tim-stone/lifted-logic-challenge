$(document).ready(function(){

  $('.slider').slick({
    centerMode: true,
    centerPadding: '5px',
    slidesToShow: 3,
    rows: 1,
    variableWidth: true,
    arrows: true,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    responsive: [
      {
        breakpoint: 1920, // Large Laptops
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1440, // Small Laptops/Landscape Tablets & Tablets
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          touchMove: true
        }
      },
      {
        breakpoint: 768, //All Phones Sizes
        settings: {
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
          touchMove: true
        }
      }
    ]
  });

});
