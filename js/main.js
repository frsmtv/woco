$(document).ready(function() {

    // **** Video action ****
    $('#videoBtn').click(function(){
        $('#videoContainer').fadeIn();
        $('#contact').hide();
        $('footer').hide();
        $("body, html").animate({
            scrollTop: $(document).height()
        }, 1200);
        $('#videoBtn').css('opacity', '1');
        $('#contactBtn').css('opacity', '0.5');
    });

    // **** Contact action ****
    $('#contactBtn').click(function(){
        $('#videoContainer').hide();
        $('#contact').fadeIn();
        $('footer').fadeIn();
        $('#videoBtn').css('opacity', '0.5');
        $('#contactBtn').css('opacity', '1');
    })


});
