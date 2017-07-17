
// Show / Hide menu when clicked
$('.has-sub').on('click', function(e) { // Find all with ID
    $('.dropdown-menu').not(this).removeClass('dropdown-shown'); // Hide other menus
    //$('.shown').removeClass('shown');
    $(this).find('.dropdown-menu').toggleClass('dropdown-shown');
});

$('section').not('#header-btn').on('click', function(e) { // Hide when clicking section (will modify later)
    $('.dropdown-menu').removeClass('dropdown-shown'); // Hide other menus clicking on window
    $('.shown').removeClass('shown');
    $('#header-menu').removeClass('is-active');
});

// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('is-active');
})