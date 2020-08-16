new Glider(document.querySelector(".glider"), {
  slidesToShow: 1.25,
  draggable: true,
  rewind: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next"
  },
  responsive : [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.45,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: "auto"
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3.1,
        slidesToScroll: "auto"
      }
    }
  ]
})