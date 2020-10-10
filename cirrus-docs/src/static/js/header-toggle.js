module.exports = function () {
    // Get all the nav-btns in the page
    let navBtns = document.querySelectorAll('.nav-btn');

    // Add an event handler for all nav-btns to enable the dropdown functionality
    navBtns.forEach((ele) => {
        ele.addEventListener('click', function () {
            // Get the dropdown-menu associated with this nav button (insert the id of your menu)
            let dropDownMenu = document.getElementById('header-menu');

            // Toggle the nav-btn and the dropdown menu
            ele.classList.toggle('active');
            dropDownMenu.classList.toggle('active');
        });
    });
};
