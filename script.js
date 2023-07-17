$(document).ready(function(){
    $("ul.nav li a[href^='#']").click(function(){
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 400);
    });
});

function redirectMobileHandler() {
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);
    if(width < 1000) {
      window.location = 'mobile.html';
    }
  }
  
  window.onload = redirectMobileHandler();
  window.onresize = () => redirectMobileHandler();

// window.onscroll = function() {};