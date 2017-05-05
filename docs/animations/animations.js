// Get buttons
let pulseHeartBtn = $('#toggle-pulse-heart');
let pulseDivBtn = $('#toggle-pulse-div');
let pulseBtn = $('#toggle-pulse-btn');

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