//Carousel in Work Section
$(document).ready(function () {
  //Add and Remove Class for Work Div for small and larger res.
    $(function() {
    if($(this).width() < 768) {
      $('#work')
      .removeClass('ms-5 me-5');
    } else {
      $('#work')
      .addClass('ms-5 me-5');
    }
});

//Carousel for HTML and CSS Development
var carouselHTMLANDCSS = function () {
var multipleCardCarousel = document.querySelector(
  "#carouselHTMLCSS"
);
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
  interval: false,
});
if (window.matchMedia("(min-width: 768px)").matches) {
  carousel;
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselHTMLCSS .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselHTMLCSS .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselHTMLCSS .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselHTMLCSS .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
};

//Carousel for JS Programming
var carouselJS = function () {
  var multipleCardCarousel = document.querySelector(
    "#carouselJS"
  );
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  if (window.matchMedia("(min-width: 768px)").matches) {
    carousel;
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselJS .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselJS .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselJS .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselJS .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
  };

  //Carousel for Dynamic Web Development
var carouselDynamic = function () {
  var multipleCardCarousel = document.querySelector(
    "#carouseldynamic"
  );
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  if (window.matchMedia("(min-width: 768px)").matches) {
    carousel;
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouseldynamic .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouseldynamic .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouseldynamic .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouseldynamic .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
  };

   //Carousel for React Js
var carouselReactJs = function () {
  var multipleCardCarousel = document.querySelector(
    "#carouselreactjs"
  );
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  if (window.matchMedia("(min-width: 768px)").matches) {
    carousel;
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselreactjs .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselreactjs .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselreactjs .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselreactjs .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
  };

//Initialize functions:
carouselHTMLANDCSS();
carouselJS();
carouselDynamic();
carouselReactJs();
});