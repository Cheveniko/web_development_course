$(document).ready(function() {
    //Efecto nav
    $(".header-nav__items").each(function(i){
        $(this).css({
            top: "-200px"
        })
        $(this).animate({
            top: "0px"
        }, 1000 + (i * 500))
    })
    //Efecto header
    if ($(window).width() > 800) {
        $(".header-content").css({
            opacity: "0",
            marginTop: "20px"
        })
        $(".header-content").animate({
            opacity: "1",
            marginTop: "-70px"
        }, 1500)
    }
    //Scroll elementos nav
    const aboutPosition = $("#about").offset().top,
          menuPosition = $("#menu-title").offset().top,
          galleryPosition = $("#gallery").offset().top,
          locationPosition = $("#location").offset().top;

    $("#btn-about").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: aboutPosition - 100
        }, 500)
    })
    $("#btn-menu").on("click", function(e){
        e.preventDefault;
        $("html, body").animate({
            scrollTop: menuPosition - 60
        }, 500)
    })
    $("#btn-gallery").on("click", function(e){
        e.preventDefault;
        $("html, body").animate({
            scrollTop: galleryPosition - 60
        }, 500)
    })
    $("#btn-location").on("click", function(e){
        e.preventDefault;
        $("html, body").animate({
            scrollTop: locationPosition - 60
        }, 500)
    })
});