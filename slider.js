if (screen.width < 767.98) {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
} else if (screen.width < 991.98) {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 3
  });
}else if (screen.width < 1025) {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
}
else {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 6,
    slidesToScroll: 3
  })
}