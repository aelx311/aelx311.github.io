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