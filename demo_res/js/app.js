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
    $('#header-menu').toggleClass('active');
    $('.nav-btn').toggleClass('active');
    $('#header').toggleClass('translucent');
});

// Show / Hide menu when clicked
$('.has-sub').not('.toggle-hover').on('click', function(e) { // Find all with ID
    $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide other menus
    //$('.shown').removeClass('shown');
    $(this).children('.dropdown-menu').toggleClass('dropdown-shown');
});

$(document).on('click', function(e) { // Hide when clicking section (will modify later)
    $('.dropdown-menu').removeClass('dropdown-shown'); // Hide other menus clicking on window
    //$('.dropdown-shown').removeClass('dropdown-shown');
    $('#header-menu').removeClass('active');
});

/* Clicks within the dropdown won't make
   it past the dropdown itself */
$("#header").click(function(e){
  e.stopPropagation();
});

// Hide menu after clicking a menu item
$('.nav-item').not($('.has-sub')).not($('.header-btn')).on('click', function(e) {
    //$('.shown').removeClass('shown');
    $('.dropdown-menu').removeClass('dropdown-shown');
    $('.nav-btn').not(this).removeClass('active');
});

// $('.dropdown-menu > li').on('click', function(e) {
//     //$('.shown').removeClass('shown');
   
//     $('.dropdown-menu').removeClass('dropdown-shown');
// });

// Hide menu after clicking menu item
$('.dropdown-menu li').on('click', function(e) {
    $(this).removeClass('dropdown-shown');
    $('#header-menu').removeClass('active');
    $('.nav-btn').removeClass('active');
});