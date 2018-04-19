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

    // Copy button script
    if (document.getElementsByClassName('copy').length !== 0)
        var clipboard = new Clipboard('.copy'); // It will handle the rest...
});

// Hide when clicking nav-item
$('.nav-item').not('.has-sub').not('.nav-btn').on('click', function(e) {
    $('#header-menu').removeClass('active');
});

// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('active');
    $('.nav-btn').toggleClass('active');
    $('#header').toggleClass('translucent');
});

// Show / Hide menu when clicked
$('.has-sub').on('click', function(e) { // Find all with ID
    $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide other menus
    $('.has-sub').not($(this)).removeClass('active');
    $(this).children('.dropdown-menu').toggleClass('dropdown-shown');
    $(this).toggleClass('active');
});

$(document).on('click', function(e) { // Hide when clicking section (will modify later)
    $('.dropdown-menu').removeClass('dropdown-shown'); // Hide other menus clicking on window
    //$('.dropdown-shown').removeClass('dropdown-shown');
    $('#header-menu').removeClass('active');
    $('.nav-item').removeClass('active');
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
    $('.nav-btn').not($(this)).removeClass('active');
    //$(this).removeClass('active');
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

// Copy doc links
$('.doc-link').on('click', function(e) {
    e.stopPropagation();
    console.log($(this));

    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var origSelectionStart, origSelectionEnd;
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId);
    if (!target) {
        var target = document.createElement("textarea");
        target.style.position = "absolute";
        target.style.left = "-9999px";
        target.style.top = "0";
        target.id = targetId;
        document.body.appendChild(target);
    }
    target.textContent = $(this).context.href;
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    // clear temporary content
    target.textContent = "";
    return false;
});