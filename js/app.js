$(document).foundation();

$(function() {
    
    document.location.hash = '';
    
    var gridGallery =  new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
    
    console.log($('body'));
    
     $(window).scroll(function() {
        if($(window).scrollTop() == 0){
            console.log('TOP');   
            document.location.hash = '';
        }
    });
});
