$(document).ready(function() {

     if ($(window).scrollTop() >= 120) {
            $('#header').addClass('header-fill');
        } else {
            $('#header').removeClass('header-fill');
        }
        
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 120) {
            $('#header').addClass('header-fill');
        } else {
            $('#header').removeClass('header-fill');
        }
    });
});

// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('is-active');
})