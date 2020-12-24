//DOM Manipulation

// SetAttribute
const judul1 = document.getElementsByTagName('h1')[0];
judul1.setAttribute('name', 'joban');
 
//contoh buat elemen Baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.append(pBaru);

//contoh 2
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)'); 
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
//node lama
const p4 = sectionB.querySelector('p');
//node baru
const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('judul Baru');
h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, p4)


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';