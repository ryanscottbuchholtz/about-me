$(".box").mflip();

$('.navigation a:lt(4)').click(function() {
    $(this).addClass("active").siblings().removeClass("active");
});
