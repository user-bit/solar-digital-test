$(window).scroll(function () {
    0 != $(this).scrollTop() ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
}), $("#toTop").click(function () {
    $("body,html").animate({scrollTop: 0}, 800)
});