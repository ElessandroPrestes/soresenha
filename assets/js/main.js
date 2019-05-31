<<<<<<< HEAD
(function (win, doc){
  "use strict";  

//let btn = doc.querySelector('[js-btn-back]');

win.addEventListener("scroll", () =>{
  var btn = doc.getElementById("arrow");

  if(btn.scrollTop() >=300){
    btn.style.display="none";
  }else{
    btn.style.display="block";
  }
});

btn.addEventListener("click", () =>{
  ('html', 'body').animate({scrollTop:0}, 800);
  return false;
});




},(window, document));
=======

$(document).ready(function (){
    $('.btn-back-to-top').hide();
    
    $(window).scroll(function(){
      if($(this).scrollTop() >=100) {
          $('.btn-back-to-top').fadeIn();
         } else{
            $('.btn-back-to-top').fadeOut(); 
         }
    });
        
    $('.btn-back-to-top').click(function(){
        $('html, body, main').animate({
            scrollTop: 0
        },500);
    });
    
});

>>>>>>> dev
