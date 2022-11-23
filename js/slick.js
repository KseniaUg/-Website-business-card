$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '200',
    infinite: true,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,

        }
      },
    ]
  });
});
