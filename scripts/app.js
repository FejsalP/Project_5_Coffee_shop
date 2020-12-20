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
  //parallax, header
  var headerBg = document.getElementById('background');
  window.addEventListener("scroll", function(){
      headerBg.style.opacity = 1 - +window.pageYOffset/700+'';
      headerBg.style.top = +window.pageYOffset+'px';
      //headerBg.style.backgroundPositionY = +window.pageYOffset+'px';
    })
});
