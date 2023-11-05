document.getElementById('list-container').addEventListener('click', function (event) {
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);
})

// function getTextElementById(textId) {
//     const listContainer = document.getElementById(textId);
//     const li = document.createElement('li');
//     li.classList.add('item');
//     listContainer.appendChild(li);
//     li.innerText = 'Lionel Messi';
//     return li;
// }

document.getElementById('btn-messi').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    li.classList.add('item');
    listContainer.appendChild(li);

})

document.getElementById('btn-Neymar').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = 'Neymar Jr';
    li.classList.add('item');
    listContainer.appendChild(li);
})

document.getElementById('btn-Mbappé').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = 'Kylian Mbappé';
    li.classList.add('item');
    listContainer.appendChild(li);
})

document.getElementById('btn-Vítor').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = 'Vítor Machado';
    li.classList.add('item');
    listContainer.appendChild(li);
})

document.getElementById('btn-Ramos').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = 'Sergio Ramos';
    li.classList.add('item');
    listContainer.appendChild(li);
})

document.getElementById('btn-Renato').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = 'Renato Sanches';
    li.classList.add('item');
    listContainer.appendChild(li);
})


