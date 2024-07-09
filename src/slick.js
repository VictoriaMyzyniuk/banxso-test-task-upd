const next = document.querySelector('.slick-next-custom');
const prev = document.querySelector('.slick-prev-custom');

$(document).ready(function () {
  $('.multiple-items').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: prev,
    nextArrow: next,
    centerMode: true,
  });
});
