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