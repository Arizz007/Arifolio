$(".main-content .owl-carousel").owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 10,
  autoplay: false,
  navigation: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  navContainer: ".main-content .custom-nav",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
