$(document).ready(function(){

    $(window).scroll(function(){
        const windowWidth = $(window).width();

        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();

            $(".header-content").css({
                "transform": "translate(0px, " + (scroll/2) + "%)"
            })
            $(".about-content").css({
                "transform": "translate(0px, -" + (scroll/3) + "%)"
            })
        }
    });
    
    $(window).resize(function(){
        const windowWidth = $(window).width();
        if (windowWidth < 800) {
            $(".about-content").css({
                "transform": "translate(0px, 0px)"
            })
        }
    })
})