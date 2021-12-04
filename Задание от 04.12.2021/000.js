const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', function(event) {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    // li.className = "red";
    list.appendChild(li);

    if (li.innerHTML > 10) {
        li.className = "red";
    }
    if (li.innerHTML < 10) {

        li.className = "blue";
    }
    if (li.innerHTML == 10) {
        li.className = "green";
    }

});