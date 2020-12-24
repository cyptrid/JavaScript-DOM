//DOM Event
//Event Handler
const p3 = document.querySelector('.p3');

function ubahWarna(){
    p3.style.backgroundColor = 'lightblue';
}

//addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksliBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksliBaru);
    ul.appendChild(liBaru); 
});



