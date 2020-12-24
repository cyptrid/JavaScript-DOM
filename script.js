//DOM SELECTION
//document.getElementById() -> element
//document.getElementsByTagName() -> HTMLCollections
//document.getElementsByClassName() -> HTMLCollections


//document.querySelector()
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


//document.querySelectorAll();
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++){
    p[i].innerHTML = 'ini dirubah dari javascript';
    p[i].style.backgroundColor = 'lightblue';
}

// Scope DOM

const sectionB = document.querySelector('section#b');
const p5 = sectionB.getElementsByTagName('li')[0];
p5.style.backgroundColor = 'green';