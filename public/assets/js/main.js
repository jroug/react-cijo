$(document).ready( function() {

    // header - search butoon - functionality for desktop
    $('.cijo-search-button').click(function() {
        $(this).toggleClass('open');
        $('.cijo-search-text').toggleClass('open');
        return false;
    });

    // header - burger menu - functionality for mobile, tablet
    $('.cijo-button-burger').click(function() {
        if ( $('#navbarMain').hasClass('show') && $('#navbarMain').hasClass('open') ){
            $(this).removeClass('open');
            $('#navbarMain').removeClass('open');
            setTimeout(function(){
                $('#navbarMain').removeClass('show')
            },400);
        }else if ( !$('#navbarMain').hasClass('show') && !$('#navbarMain').hasClass('open') ){
            $(this).addClass('open');
            $('#navbarMain').addClass('show');
            setTimeout(function(){
                $('#navbarMain').addClass('open')
            },10);
        }
        return false;
    });

    // header - navbar submenu 
    $('.dropdown-toggle').hover(function() {
      //$(this).parent().find('.dropdown-menu').toggle();
      return false;
    });
});

 

