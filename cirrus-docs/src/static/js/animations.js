module.exports = function () {
    const config = [
        {
            class: 'bounce',
            elements: ['#toggle-bounce-heart', '#toggle-bounce-div', '#toggle-bounce-btn'],
        },
        {
            class: 'bounceIn',
            elements: ['#toggle-bounce-in-heart', '#toggle-bounce-in-div', '#toggle-bounce-in-btn'],
        },
        {
            class: 'paused',
            elements: ['#toggle-pulse-heart', '#toggle-pulse-div', '#toggle-pulse-btn'],
        },
    ];

    for (const animation of config) {
        animation.elements.forEach((toggle) => {
            const elementId = toggle.replace('toggle-', '');
            console.log(document.querySelector(toggle), toggle);

            document.querySelector(toggle).addEventListener('click', () => {
                console.log(document.querySelector(elementId), elementId);
                document.querySelector(elementId).classList.toggle(animation.class);
            });
        });
    }

    // // Get buttons
    // let pulseHeartBtn = $('#toggle-pulse-heart');
    // let pulseDivBtn = $('#toggle-pulse-div');
    // let pulseBtn = $('#toggle-pulse-btn');

    // // Bounce animation
    // let bounceHeartBtn = $('#toggle-bounce-heart');
    // let bounceDivBtn = $('#toggle-bounce-div');
    // let bounceBtn = $('#toggle-bounce-btn');

    // // Bounce in animation
    // let bounceInHeartBtn = $('#toggle-bounceIn-heart');
    // let bounceInDivBtn = $('#toggle-bounceIn-div');
    // let bounceInBtn = $('#toggle-bounceIn-btn');

    // // Fade in animation
    // let fadeInHeartBtn = $('#toggle-fadeIn-heart');
    // let fadeInDivBtn = $('#toggle-fadeIn-div');
    // let fadeInBtn = $('#toggle-fadeIn-btn');

    // // Add event handlers
    // pulseHeartBtn.click(() => {
    //     $('#pulse-heart').toggleClass('paused');
    // });

    // pulseDivBtn.click(() => {
    //     $('#pulse-div').toggleClass('paused');
    // });

    // pulseBtn.click(() => {
    //     $('#pulse-btn').toggleClass('paused');
    // });

    // // Event handlers for bounce animation
    // bounceHeartBtn.click(() => {
    //     $('#bounce-heart').removeClass('bounce');
    //     setTimeout(() => {
    //         $('#bounce-heart').addClass('bounce');
    //     }, 100);
    // });

    // bounceDivBtn.click(() => {
    //     $('#bounce-div').removeClass('bounce');
    //     setTimeout(() => {
    //         $('#bounce-div').addClass('bounce');
    //     }, 100);
    // });

    // bounceBtn.click(() => {
    //     $('#bounce-btn').removeClass('bounce');
    //     setTimeout(() => {
    //         $('#bounce-btn').addClass('bounce');
    //     }, 100);
    // });

    // // Event handlers for bounce in animation
    // bounceInHeartBtn.click(() => {
    //     $('#bounceIn-heart').removeClass('bounceIn');
    //     setTimeout(() => {
    //         $('#bounceIn-heart').addClass('bounceIn');
    //     }, 100);
    // });

    // bounceInDivBtn.click(() => {
    //     $('#bounceIn-div').removeClass('bounceIn');
    //     setTimeout(() => {
    //         $('#bounceIn-div').addClass('bounceIn');
    //     }, 100);
    // });

    // bounceInBtn.click(() => {
    //     $('#bounceIn-btn').removeClass('bounceIn');
    //     setTimeout(() => {
    //         $('#bounceIn-btn').addClass('bounceIn');
    //     }, 100);
    // });

    // // Event handlers for fade in animation
    // fadeInHeartBtn.click(() => {
    //     $('#fadeIn-heart').removeClass('fadeIn');
    //     setTimeout(() => {
    //         $('#fadeIn-heart').addClass('fadeIn');
    //     }, 100);
    // });

    // fadeInDivBtn.click(() => {
    //     $('#fadeIn-div').removeClass('fadeIn');
    //     setTimeout(() => {
    //         $('#fadeIn-div').addClass('fadeIn');
    //     }, 100);
    // });

    // fadeInBtn.click(() => {
    //     $('#fadeIn-btn').removeClass('fadeIn');
    //     setTimeout(() => {
    //         $('#fadeIn-btn').addClass('fadeIn');
    //     }, 100);
    // });
};
