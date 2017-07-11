$(document).ready(function() {

    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 0) {
            $("#header").addClass("darkHeader");
        } else {

           $("#header").removeClass("darkHeader");
        }
    });

    $("#header").on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });



});