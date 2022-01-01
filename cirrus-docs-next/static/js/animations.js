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
            class: 'fadeIn',
            elements: ['#toggle-fade-in-heart', '#toggle-fade-in-div', '#toggle-fade-in-btn'],
        },
        {
            class: 'paused',
            elements: ['#toggle-pound-heart', '#toggle-pound-div', '#toggle-pound-btn'],
        },
    ];

    for (const animation of config) {
        animation.elements.forEach((toggle) => {
            const elementId = toggle.replace('toggle-', '');

            document.querySelector(toggle).addEventListener('click', () => {
                document.querySelector(elementId).classList.toggle(animation.class);
            });
        });
    }
};
