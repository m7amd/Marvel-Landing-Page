$(function () {

  "use strict";

  // Smooth Scroll

  $('header nav a').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

    }, 1100);

  });

  $(window).on('scroll', function () {

     // Sync Navbar Links with Sections
    
    $('section').each(function () {

      if ($(window).scrollTop() > $(this).offset().top) {
        
        let idBlock = $(this).attr('id');

        $("header nav a").removeClass('active');

        $('header nav a [data-scroll="' + idBlock + '"]').addClass('active');

      }

    });

  });

  // Add Class Active To Bullets

  $('.bullets span').on('click', function () {

    $(this).addClass('active').siblings().removeClass('active');

  });


  // Scroll To Top 

  let scrollToTop = $('#btn');

  $(window).on('scroll', function () {

    if ($(this).scrollTop() >= 1200) {

      scrollToTop.fadeIn(500);

    } else {

      scrollToTop.fadeOut(500);

    }

  });

  // Up

  scrollToTop.on('click', function () {

    $('html, body').animate({

      scrollTop: 0

    }, 900); 

  });

  

});