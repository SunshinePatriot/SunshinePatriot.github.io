$(document).ready(function() {

    var menuOpen = false;
    
    
        
      setTimeout(function(){
       $(".downQuick").addClass("animated fadeInDown");
       $(".downQuick").removeClass("hidden");
   }, 200);
    
   setTimeout(function(){
       $(".upSlow").addClass("animated fadeInUp");
       $(".upSlow").removeClass("hidden");
   }, 300); 
    
    setTimeout(function(){
       $(".slowFade").addClass("animated fadeIn");
       $(".slowFade").removeClass("hidden");
   }, 300);   
        


   
    
    
    $("#hamburger").on('click', function(){
       
        if(menuOpen) {
            $("#links").addClass("hidden");
            $("#links").removeClass("fadeIn");
            setTimeout(function(){
                $("#hamburger").attr('src',"/img/hamburgerDark.png");
                $("#headerCollapse").removeClass("openMenu");
                $("#headerCollapse").addClass("closeMenu");
                 menuOpen = false;
            }, 300);
           
        } else {
            
            $("#headerCollapse").removeClass("closeMenu");
            $("#headerCollapse").addClass("openMenu");
            setTimeout(function(){
                $("#hamburger").attr('src',"/img/hamburger.png");
                $("#links").removeClass("hidden");
                $("#links").addClass("fadeIn");
                 menuOpen = true;
            }, 300);
        }

        
    });
    
    
    
    
    
   



});
