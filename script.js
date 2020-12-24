//DOM SELECTION
//document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Ikhdanul Widad Joban'

//document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

//document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini dirubah dari javascript';
