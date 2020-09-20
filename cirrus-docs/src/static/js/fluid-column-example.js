module.exports = function () {
    const fluidContainerAddBtn = document.querySelector('#fluid-container-add');
    const fluidContainerDeleteBtn = document.querySelector('#fluid-container-delete');
    const fluidContainerTest = document.querySelector('#fluidContainerTest');

    fluidContainerAddBtn.addEventListener('click', () => {
        const col = document.createElement('div');
        col.className = 'col';
        const p = document.createElement('div');
        p.className = 'uppercase';
        p.innerText = 'col';
        col.appendChild(p);
        fluidContainerTest.appendChild(col);
    });

    fluidContainerDeleteBtn.addEventListener('click', () => {
        if (fluidContainerTest.childNodes.length === 0) {
            return;
        }
        fluidContainerTest.removeChild(fluidContainerTest.lastChild); // Ty based jQuery
    });
};
