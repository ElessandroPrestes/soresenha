
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

