
$(document).ready(function(){

//Toggle Nav for mobile  menu
    $('.open_bar').click(function(){
        $('.dashboard').addClass('active-nav');
        $('.menu-toggle').addClass('closee');
    });
    $('.close_bar').click(function(){
        $('.dashboard').removeClass('active-nav');
        $('.menu-toggle').removeClass('closee');
    });

});