(function ($) {
  ("use strict");
  var nav = $("nav");
  var navHeight = nav.outerHeight();

  $(".navbar-toggler").on("click", function () {
    if (!$("#mainNav").hasClass("navbar-reduce")) {
      $("#mainNav").addClass("navbar-reduce");
    }
  });

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $(".scrolltop-mf").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /*--/ Star Counter /--*/
  $(".counter").counterUp({
    delay: 15,
    time: 2000,
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navHeight + 5,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: navHeight,
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger("scroll");
  $(window).on("scroll", function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $(".navbar-expand-md").addClass("navbar-reduce");
      $(".navbar-expand-md").removeClass("navbar-trans");
    } else {
      $(".navbar-expand-md").addClass("navbar-trans");
      $(".navbar-expand-md").removeClass("navbar-reduce");
    }
    if ($(window).scrollTop() > top) {
      $(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
    } else {
      $(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
      strings: typed_strings.split(","),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    });
  }

  /*--/ Testimonials owl /--*/
  $("#testimonial-mf").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    // autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $("#testimonial-mf1").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    // autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // ========================================================================= //
  //  Skills Transition
  // ========================================================================= //

  $(window).on("scroll", function () {
    $("#div3").fadeIn(3000);
  });
})(jQuery);

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {
	var portfolioIsotope = $(".portfolio-container").isotope({
	itemSelector: ".portfolio-thumbnail",
	layoutMode: "fitRows",
	});

	$("#portfolio-flters li").on("click", function () {
	$("#portfolio-flters li").removeClass("filter-active");
	$(this).addClass("filter-active");

	portfolioIsotope.isotope({ filter: $(this).data("filter") });
	});
});
	
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});



// const brandImages = document.querySelector(".brand-images");
// const prevButton = document.getElementById("prev-button");
// const nextButton = document.getElementById("next-button");
// const imageWidth = document.querySelector(".brand-images img").clientWidth;
// const imageWidth = document.querySelector(".brand-images img");

// let currentIndex = 0;

// // Function to slide to the next set of brand images
// function slideNext() {
//   currentIndex++;
//   if (
//     currentIndex * -imageWidth <=
//     (brandImages.childElementCount - 1) * -imageWidth
//   ) {
//     currentIndex = 0; // Loop back to the beginning
//   }
//   brandImages.style.transform = `translateX(${currentIndex * -imageWidth}px)`;
// }

// // Function to slide to the previous set of brand images
// function slidePrev() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = brandImages.childElementCount - 1; // Loop to the end
//   }
//   brandImages.style.transform = `translateX(${currentIndex * -imageWidth}px)`;
// }

// // Attach click event listeners to the arrow buttons
// nextButton.addEventListener("click", slideNext);
// prevButton.addEventListener("click", slidePrev);

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

// var modal01 = document.getElementById('modal01');
// var body = document.querySelector('.body');

// body.appendChild(modal01);


function openModal(cardNumber) {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function f1() {
  document.getElementById("modal01").style.display = "block";
  // document.getElementById("cont").classList.remove("glass");

  var delayInMilliseconds = 190; //1 second

  setTimeout(function () {
    //your code to be executed after 1 second

    $("#cont").addClass("glass1").removeClass("glass");
  }, delayInMilliseconds);

  // document.getElementById("cont").classList.add("glass1");

  
  
}

function f2() {
  document.getElementById("cont").classList.remove("glass1");
  document.getElementById("cont").classList.add("glass");
  document.getElementById("modal01").style.display = "none";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var frameNumber = 0, // start video at frame 0
  // lower numbers = faster playback
  //   playbackConst = 500,
  playbackConst = 10,
  // get page height from video duration
  setHeight = document.getElementById("set-height"),
  // select video element
  vid = document.getElementById("v0");

// dynamically set the page height according to video length
vid.addEventListener("loadedmetadata", function () {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.scrollY / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

const CV_url = "../assets/cv.pdf";

function CV_download_1() {
  const aTag = document.createElement("a");
  aTag.href = CV_url;
  aTag.setAttribute("download", "CV.pdf");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}

const CV_download = () => {
  const aTag = document.createElement("a");
  aTag.href = CV_url;
  aTag.setAttribute("download", "CV.pdf");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};