// Get buttons
let pulseHeartBtn = $('#toggle-pulse-heart');
let pulseDivBtn = $('#toggle-pulse-div');
let pulseBtn = $('#toggle-pulse-btn');

// Bounce animation
let bounceHeartBtn = $('#toggle-bounce-heart');
let bounceDivBtn = $('#toggle-bounce-divs');
let bounceBtn = $('#toggle-bounce-btn');

// Add event handlers
pulseHeartBtn.click(() => {
    $('#pulse-heart').toggleClass('paused');
});

pulseDivBtn.click(() => {
    $('#pulse-div').toggleClass('paused');
});

pulseBtn.click(() => {
    $('#pulse-btn').toggleClass('paused');
});

// Event handlers for bounce animation
bounceHeartBtn.click(() => {
    $('#bounce-heart').removeClass('bounce');
    setTimeout(() => {
        $('#bounce-heart').addClass('bounce');
    }, 100);
});

bounceDivBtn.click(() => {
    $('#bounce-div').removeClass('bounce');
    setTimeout(() => {
        $('#bounce-div').addClass('bounce');
    }, 100);
});

bounceBtn.click(() => {
    $('#bounce-btn').removeClass('bounce');
    setTimeout(() => {
        $('#bounce-btn').addClass('bounce');
    }, 100);
});