const button = document.querySelector('.head_link--button');

const off = document.querySelector('.modal_off');

const info = document.getElementById('modal');

button.addEventListener('click', (event) => {
    event.preventDefault();
    info.style.display = "block"

});

off.addEventListener('click', (event) => {
    event.preventDefault();
    info.style.display = "none"

});
