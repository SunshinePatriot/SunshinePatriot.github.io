$(document).ready(function() {

    var menuOpen = false;

   setTimeout(function(){
       $(".downQuick").addClass("animated fadeInDown");
       $(".downQuick").removeClass("hidden");
   }, 250);
    
   setTimeout(function(){
       $(".upSlow").addClass("animated fadeInUp");
       $(".upSlow").removeClass("hidden");
   }, 400); 
    
    
    $("#hamburger").on('click', function(){
       
        if(menuOpen) {
            $("#links").addClass("fadeOut");
            $("#links").removeClass("fadeIn");
            setTimeout(function(){
                $("#headerCollapse").removeClass("openMenu");
                $("#headerCollapse").addClass("closeMenu");
                 menuOpen = false;
            }, 450);
           
        } else {
            
            $("#headerCollapse").removeClass("closeMenu");
            $("#headerCollapse").addClass("openMenu");
            setTimeout(function(){
                $("#links").removeClass("fadeOut");
                $("#links").removeClass("hidden");
                $("#links").addClass("fadeIn");
                 menuOpen = true;
            }, 300);
        }

        
    });
    
    
    
    
    
   



});
