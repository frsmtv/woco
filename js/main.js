$(document).ready(function() {

    // **** Video action ****
    $('#videoBtn').click(function(){
        $('#videoContainer').fadeIn();
        $('#homeSocial').hide();
        $('#contact').hide();
        $('header').removeClass('fadeIn');
        $('footer').hide();
        $("body, html").animate({scrollTop: $(document).height()}, 2000);
        $('#videoBtn').css('opacity', '1');
        $('#contactBtn').css('opacity', '0.5');
    });

    // **** Contact action ****
    $('#contactBtn').click(function(){
        $('#videoContainer').hide();
        $('#homeSocial').hide();
        $('header').addClass('animated fadeIn');
        $('body').fadeIn();
        $('#contact').fadeIn();
        $('footer').fadeIn();
        $('#videoBtn').css('opacity', '0.5');
        $('#contactBtn').css('opacity', '1');
    })

});
