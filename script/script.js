
const content = document.getElementById('content');

const block = document.querySelector('.content');


const lightb = document.querySelector('.lightb');
const darkb = document.querySelector('.darkb');

lightb.addEventListener('click', function() {
document.body.classList.remove(`dark`);
document.body.classList.add(`light`);

});

darkb.addEventListener(`click`, function() {
    document.body.classList.remove(`light`);
    document.body.classList.add(`dark`);

    });
const colors = ['red', `blue`, `green` , `white`, `yellow`];
const randomb = document.querySelector('.randomb')
randomb.addEventListener(`click`, function() {
    document.body.classList.remove(`light`);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    });

randomb.addEventListener(`click`, function() {
    document.body.classList.remove(`dark`);
    document.body.classList.add(`randomColor`);
        
    });

