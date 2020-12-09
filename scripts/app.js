$(document).ready(function () {
  // add padding top to show content behind navbar
  $("body").css("padding-top", $(".navbar").outerHeight() + "px");

  // detect scroll top or down
  if ($(".scroll").length > 0) {
    // check if element exists
    var last_scroll_top = 0;
    $(window).on("scroll", function () {
      scroll_top = $(this).scrollTop();
      if (scroll_top < last_scroll_top) {
        $(".scroll").removeClass("scrolledDown").addClass("scrolledUp");
      } else {
        $(".scroll").removeClass("scrolledUp").addClass("scrolledDown");
      }
      last_scroll_top = scroll_top;
    });
  }
/*
  var headerBackground = $("#background");
  window.addEventListener("scroll", function(){
            $("#background").style.opacity = 1 - +window.pageYOffset/550+'';
      $("#background").style.top = +window.pageYOffset+'px';

  })
  window.on("scroll", function(){
      $("#background").style.opacity = 1 - +window.pageYOffset/550+'';
      $("#background").style.top = +window.pageYOffset+'px';
  })*/


  var headerBg = document.getElementById('background');
  window.addEventListener("scroll", function(){
      headerBg.style.opacity = 1 - +window.pageYOffset/700+'';
      headerBg.style.top = +window.pageYOffset+'px';
      //headerBg.style.backgroundPositionY = +window.pageYOffset+'px';
    })
});
