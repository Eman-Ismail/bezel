// ==========================
//   hide loadinf after 10s
// ==========================
$(".loading").fadeOut(10)


// ==========================
//     show owlcarosel
// ==========================
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true
    });
});

// =================================
//  call function to show owlcarosel
// ==================================
new WOW().init();

// =================================
//  use pligin type.js
// ==================================
var typed = new Typed(".typed-words", {
    strings: ["", "apps", "websites", "softwares"],
    smartBackspace: true,
    typeSpeed: 50,
    loop: true,
    startDelay: 1000
});

// =====================================================
//  change background-color of navbar when scroll dwon
// =====================================================
var info = $(".info").offset().top;
// console.log(info)
$(window).scroll(function() {
    var windowScroll = $(window).scrollTop();
    console.log(windowScroll)
    if (windowScroll > info) {
        $(".navchangecol").css("backgroundColor", "#fff");
        $(".navbar-nav .nav-link,.navbar-nav .icon a ").css("color", "#000");
        $("#logo").attr("src", "image/logo-dark.png")
    } else {
        $(".navchangecol").css("backgroundColor", "transparent");
        $(".navbar-nav .nav-link ,.navbar-nav .icon a ").css("color", "#fff");
        $("#logo").attr("src", "image/logo-light.png")

    }

})