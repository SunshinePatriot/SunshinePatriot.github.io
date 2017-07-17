$(document).ready(function() {

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 0) {
            $("#header").addClass("darkHeader");
        } else {

           $("#header").removeClass("darkHeader");
        }
    });
    
});