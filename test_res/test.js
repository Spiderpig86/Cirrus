
// Show / Hide menu when clicked
$('.has-sub').on('click', function(e) { // Find all with ID
    $('.dropdown-menu').hide(); // Hide other menus
    $('.shown').removeClass('shown');
    $(this).find('.dropdown-menu').toggle().toggleClass('shown');
});

$('section').on('click', function(e) { // Hide when clicking section (will modify later)
     $('.dropdown-menu').hide(); // Hide other menus clicking on window
    $('.shown').removeClass('shown');
});