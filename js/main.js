$(document).ready(function(){

   // **** construction message hide on scroll ****
    $(window).scroll(function() {

        if ($(this).scrollTop()>0)
        {
            $('#wip').addClass('fadeOut');
        }
        else
        {
            $('#wip').removeClass('fadeOut').addClass('fadeIn');
        }
    });


});