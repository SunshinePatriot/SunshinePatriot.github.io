$(window).on("scroll", function() {
    if($(window).scrollTop() > 0) {
        $("#header").addClass("whiteHeader");
    } else {

       $("#header").removeClass("whiteHeader");
    }
});

$("#header").on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
});