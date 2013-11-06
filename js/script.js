$(document).ready(function() {
    $("#home_link").addClass("linkHover");
	
    /**
    * Parallax scrolling
    * source: http://www.mohi.me
    */
    // Cache the Window object
    $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
      
        $(window).scroll(function() {
            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!			
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // window scroll Ends
    });
    
    /**
    * Smooth scrolling
    * source: http://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor
    */
    $(".smoothScroll").click(function(event){
         event.preventDefault();
         // Calculate destination place
         var dest = 0;
         if($(this.hash).offset().top > $(document).height() - $(window).height()) {
              dest = $(document).height() - $(window).height();
         }
        else {
              dest = $(this.hash).offset().top;
         }
        
         // Go to destination
         $("html,body").animate({scrollTop:dest}, 1500,'swing');
     });
    
    /**
    * Highlight the link that is currently viewing
    */
    // Get section positions
    var homePosition = $("#home").offset().top;
    var projectsPosition = $("#projects").offset().top;
    var aboutPosition = $("#about").offset().top;
    var contactPosition = $("#contact").offset().top;
    
    $(window).scroll(function() {
        var windowPosition = $(window).scrollTop() + 60;
//        $("article > p").text(windowPosition);
        if((windowPosition > 0) && (windowPosition < (homePosition + 900))) {
            $("#home_link").addClass("linkHover");
        }
        else if((windowPosition > projectsPosition) && (windowPosition < (projectsPosition + 900))) {
            $("#projects_link").addClass("linkHover");
        }
        else if((windowPosition > aboutPosition) && (windowPosition < (aboutPosition + 900))) {
            $("#about_link").addClass("linkHover");
        }
        else if((windowPosition > contactPosition) && (windowPosition < (contactPosition + 900))) {
            $("#contact_link").addClass("linkHover");
        }
        else {
            $("#navigation_bar ul").removeClass("linkHover");
        }
    });
});

/* 
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");