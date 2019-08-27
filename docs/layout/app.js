var fluidContainerAddBtn = $('#fluid-container-add');
var fluidContainerDeleteBtn = $('#fluid-container-delete');
var fluidContainerTest = $('#fluidContainerTest');

fluidContainerAddBtn.click(() => {
    var col = document.createElement('div');
    col.className = 'col';
    var p = document.createElement('div');
    p.className = 'uppercase';
    p.innerText = 'col';
    $(col).append(p);
    $(fluidContainerTest).append(col);
});

fluidContainerDeleteBtn.click(() => {
    fluidContainerTest.children().last().remove(); // Ty based jQuery
});