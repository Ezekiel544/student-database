// let div = document.querySelector('div#h');
let div = document.getElementById('h')
// div.innerHTML = `<h1>Hello</h1>`;
// div.style.backgroundColor = 'red';

let btnAdd = document.querySelector('#btn-add');
let nameInput = document.getElementById('name');
let localData = localStorage.getItem('students');
let names = !localData ? [] : JSON.parse(localData);
updateNumberOfNames();

div.addEventListener('click', () => {
    div.style.border = 'solid 1px black'
});

btnAdd.addEventListener('click', () => {
    let name = nameInput.value.trim().toUpperCase();
    if (name == '') {
        alert('name is empty')
    } else {
        addName(name);
    }
});

nameInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        let name = event.target.value.trim().toUpperCase();
        if (name == '') {
            alert('name is empty')
        } else {
            addName(name);
        }
    }
});

function addName(name) {
    if (names.includes(name)) {
        alert(`${name} already exist`)
    } else {
        names.push(name);
        updateLocalStorage();
        alert(`${name} added successfully`);
        nameInput.value = '';
        nameInput.focus();
        updateNumberOfNames();
    }
}

function updateNumberOfNames() {
    document.getElementById('counter').innerHTML = names.length;
}

function updateLocalStorage() {
    localStorage.setItem('students', JSON.stringify(names))
}