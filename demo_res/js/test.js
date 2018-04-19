
// TOGGLE DROPDOWN MENU
// Show / Hide menu when clicked
$('.has-sub').on('click', function(e) { // Find all with ID
    $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide other menus
    $('.has-sub').not($(this)).removeClass('active');
    $(this).children('.dropdown-menu').toggleClass('dropdown-shown');
    $(this).toggleClass('active');
});

$('section').not('#header-btn').on('click', function(e) { // Hide when clicking section (will modify later)
    $('.dropdown-menu').removeClass('dropdown-shown'); // Hide other menus clicking on window
    $('#header-menu').removeClass('active');
    $('.nav-item').removeClass('active');
});


// TOGGLE HEADER-NAV
// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('active');
    $('.nav-btn').toggleClass('active');
});

// Hide menu after clicking menu item
$('.dropdown-menu li').on('click', function(e) {
     $('#header-menu').removeClass('active');
     $('.nav-btn').removeClass('active');
});