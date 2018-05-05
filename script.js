(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body, #main').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('#main').scrollspy({
        target: '#floating',
        offset: 0
    });

    var floatingCollapse = function() {
        if ($("#home").offset().top < -150) {
            $("#floating").fadeIn(200);
        } else {
            $("#floating").fadeOut(200);
        }
    };
    floatingCollapse();
    $("#main").scroll(floatingCollapse);

})(jQuery); // End of use strict
