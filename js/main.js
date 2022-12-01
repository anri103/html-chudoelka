$(document).ready(function () {
  "use strict";

  // Menu --------------------------------------------------
  let header = document.querySelector(".header");
  let dropDownMenu = document.querySelector(".drop-down-menu");
  let dropDownMenuBtn = document.querySelector(".mobile-burger__btn");


  // Drop-down Menu --------------------------------------------------
  function dropDownMenuLink(event) {
    if (event.target.classList.contains("drop-down-menu-link-menu")) {
      if (event.target.nextElementSibling) {
        event.target.nextElementSibling.classList.toggle("none");
        event.preventDefault();
      }
    }
  }
  document.addEventListener("click", dropDownMenuLink);

  // Menu Toggle -----------------------------------------------------
  dropDownMenuBtn.addEventListener("click", (event) => {
    dropDownMenu.classList.toggle("none");
    document.body.classList.toggle("active-menu");
    event.preventDefault();
  });

  // Sticky Menu Animation -------------------------------------------
  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 70 && window.pageYOffset < 350) {
      dropDownMenu.style.top = 0;
    } else if (window.pageYOffset > 350) {
      dropDownMenu.style.top = 80 + "px";
      header.classList.add("is-sticky");
    } else {
      dropDownMenu.style.top = 80 + "px";
      header.classList.remove("is-sticky");
    }
  });

  // Tabs -------------------------------------------
  $('.products-categories a').click(function () {
    // Check for active
    $('.products-categories li').removeClass('active');
    $(this).parent().addClass('active');
    // Display active tab
    let currentTab = $(this).attr('href');
    $('.products-container .products-tab').hide();
    $(currentTab).show();
    // Reset position slider after tab switching
    $('.products-slider').slick('setPosition');
    return false;
  });

  // Sliders -------------------------------------------
  $('.hero-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="img-prev"><img class="img-fluid" src="img/arrow-left.svg" alt="arrow left"></div>',
    nextArrow: '<div class="img-next"><img class="img-fluid" src="img/arrow-right.svg" alt="arrow right"></div>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.testimonials-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('#testimonialsLeft'),
    nextArrow: $('#testimonialsRight'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.products-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="img-prev"><img class="img-fluid" src="img/arrow-left.svg" alt="arrow left"></div>',
    nextArrow: '<div class="img-next"><img class="img-fluid" src="img/arrow-right.svg" alt="arrow right"></div>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.features-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  });

  $('.works-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    prevArrow: '<div class="img-prev"><img class="img-fluid" src="img/arrow-left.svg" alt="arrow left"></div>',
    nextArrow: '<div class="img-next"><img class="img-fluid" src="img/arrow-right.svg" alt="arrow right"></div>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerPadding: '0px'
        }
      }
    ]
  });

  $('.partners-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

});