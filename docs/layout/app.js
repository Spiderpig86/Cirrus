let fluidContainerAddBtn = $('#fluid-container-add');
let fluidContainerDeleteBtn = $('#fluid-container-delete');
let fluidContainerTest = $('#fluidContainerTest');

fluidContainerAddBtn.click(() => {
    let col = document.createElement('div');
    col.className = 'col-fluid';
    let p = document.createElement('div');
    p.className = 'uppercase';
    p.innerText = 'col-fluid';
    col.append(p);
    fluidContainerTest.append(col);
});

fluidContainerDeleteBtn.click(() => {
    fluidContainerTest.children().last().remove(); // Ty based jQuery
});