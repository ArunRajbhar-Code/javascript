var list = [
    "buying fruit",
    "playing game",
    "drinking water"
];

var mainList = document.getElementById("mainList");

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function renderList() {
    mainList.innerHTML = '';
    for (let i = 0; i < list.length; ++i) {

        let item = document.createElement("div");


        item.innerHTML = `
            <span>${i + 1}</span>
            <div>${toTitleCase(list[i])}</div>
            <div><button class="delete" onclick="del(${i})">Delete</button><button onclick="edit(${i})" class="edit">Edit</button></div>
        `;


        mainList.appendChild(item);
    }
}
function edit(index) {
    var tasker = document.getElementById("task");
    tasker.value = list[index]
    del(index)
    renderList()
}


function del(index) {
    list.splice(index, 1);
    renderList();
}

function eEle(task) {
    return list.includes(task.toLowerCase());
}

function Add() {
    var task = document.getElementById("task").value.trim();
    if (task === '') {
        return alert("Please enter your task");
    } else if (eEle(task)) {
        return alert("Task already exists");
    } else {
        list.unshift(task.toLowerCase());
        document.getElementById("task").value = '';
        renderList();
    }
}

renderList();
