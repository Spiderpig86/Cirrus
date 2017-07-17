$(document).ready(function() {

     if ($(window).scrollTop() >= 120) {
            $('#header').not($('.no-transition')).addClass('header-fill');
        } else {
            $('#header').not($('.no-transition')).removeClass('header-fill');
        }
        
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 120) {
            $('#header').not($('.no-transition')).addClass('header-fill');
        } else {
            $('#header').not($('.no-transition')).removeClass('header-fill');
        }
    });
});

// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('is-active');
})

// Show / Hide menu when clicked
$('.has-sub').on('click', function(e) { // Find all with ID
    $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide other menus
    //$('.shown').removeClass('shown');
    $(this).children('.dropdown-menu').toggleClass('dropdown-shown');
});

$(document).on('click', function(e) { // Hide when clicking section (will modify later)
    $('.dropdown-menu').removeClass('dropdown-shown'); // Hide other menus clicking on window
    //$('.dropdown-shown').removeClass('dropdown-shown');
    $('#header-menu').removeClass('is-active');
});

/* Clicks within the dropdown won't make
   it past the dropdown itself */
$("#header").click(function(e){
  e.stopPropagation();
});

// Hide menu after clicking a menu item
$('.header-item').not($('.has-sub')).not($('.header-btn')).on('click', function(e) {
    //$('.shown').removeClass('shown');
    $('#header-menu').removeClass('is-active');
    $('.dropdown-menu').removeClass('dropdown-shown');
});

// $('.dropdown-menu > li').on('click', function(e) {
//     //$('.shown').removeClass('shown');
//     $('#header-menu').removeClass('is-active');
//     $('.dropdown-menu').removeClass('dropdown-shown');
// });

// Hide menu after clicking menu item
$('.dropdown-menu li').on('click', function(e) {
    $(this).removeClass('dropdown-shown');
});