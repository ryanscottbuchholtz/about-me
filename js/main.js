$(".box").mflip();

$('.navigation a:lt(4)').click(function() {
    $(this).addClass("active").siblings().removeClass("active");
});

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'maxWidth': 1000,
    });