//Button voltar ao topo.
$(document).ready(function (){
    $('.jq-back-to-top').hide();
    
    $(window).scroll(function(){
      if($(this).scrollTop()>100) {
          $('.jq-back-to-top').fadeIn();
         } else{
            $('.jq-back-to-top').fadeOut(); 
         }
    });
        
    $('.jq-back-to-top').click(function(){
        $('html,body,main').animate({
            scrollTop: 0
        },2000);
    });
    
});




