$(document).ready(function() {
    $('.open-menu').on('click', function() {
       $('.overlay').addClass('open');
    });
   
    $('.close-menu').on('click', function() {
        $('.overlay').removeClass('open');
    });
});

var nav = document.querySelector('.navbar');

$(document).scroll(function () {    
    if($(this).scrollTop() > $(window).height()){
        nav.classList.add('change');
    }else {
        nav.classList.remove('change');
    }
});

function goToSketchaurant(){
    window.location.replace('/sketchaurant/index.html');
}

function goToImgApi(){
    window.location.replace('/imageapireact/')     
}

/* CHARTS */

jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },6000);
});

