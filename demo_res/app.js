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

/*// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('is-active');
})

// Show / Hide menu when clicked
$('.has-sub').on('click', function(e) { // Find all with ID
    $('.dropdown-menu').not(this).hide(); // Hide other menus
    //$('.shown').removeClass('shown');
    $(this).find('.dropdown-menu').toggle().toggleClass('shown');
});

$('section').not('#header-btn').on('click', function(e) { // Hide when clicking section (will modify later)
     $('.dropdown-menu').hide(); // Hide other menus clicking on window
    $('.shown').removeClass('shown');
    $('#header-menu').removeClass('is-active');
});*/