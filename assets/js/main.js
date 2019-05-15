//Coloca o botão em uma varivel
var btn_subir = $(".btn-back-to-top");

//Faz a primeira verificacao ao carregar a pagina
$(document).ready(function(){
    var minhaposicao = $(this).scrollTop();
    if(minhaposicao >=200){
        btn_subir.fadeIn();
    }
    else{
        btn_subir.fadeOut();
    }
});

//Fica monitorando a rolagem de pagina
$(window).scroll(function(){
    var minhaposicao = $(this).scrollTop();
    
    if(minhaposicao >=100){
        btn_subir.fadeIn();
    }
    else{
        btn_subir.fadeOut();
    }
});

btn_subir.click(function(){
    $('html,body').animate({scrollTop:0},500);
})

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
//Função da animação scroll
function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

//Verifica se tem algum evento de scroll acontecendo.
if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll();
    },200));
}


//Api google
let map;
function initApi (){
     map = new google.maps.Map(document.querySelector(['apimap']),{
        center:{lat:-24.715931, lng:-53.726861},
        zoom:8
     });
        
    
}

