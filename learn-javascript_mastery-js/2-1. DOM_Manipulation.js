{/* Paste HTML Body
    <div>
        <span id="hi">HI - Menghapus Element</span>
    </div>
    <div>
        <span id="hi2" title="Hello Attributes">HI - Mengubah Element Attributes</span>
    </div>
    <div>
        <span id="hi3" data-test="this is a data tes" data-longer-name="longer name">HI - Mengubah Data
            Attributes</span>
    </div>
    <div>
        <span id="hi4" class="hi1 hi2">HI - Mengubah Element Classes</span>
    </div> 
*/}

// 1. ADDING ELEMENT
// Mengambil Element Body dari "index.html"
const body = document.body; 
// Menampilkan Ke Web
body.append("Hello World", " Bye"); 

// 2. CREATING ELEMENT
// Membuat Element <div>
const div99 = document.createElement('div'); 

// 3. MODIFYING ELEMENT TEXT
// Membuat Element <div>
const div = document.createElement('div'); 
// Menambahkan text yang terlihat di web !spasi & hidden text
div.innerText = "Modifying TEXT 1 - Cara 1"; 
// Menambahkan <div> ke body
body.append(div); 

// Membuat Element <div>
const div2 = document.createElement('div'); 
// Menambahkan Semua text spasi & hidden text 
div2.textContent = "Modifying TEXT 2 - Cara 2" 
// Menambahkan <div2> ke body
body.append(div2); 

// 4. MODIFYING ELEMENT HTML
// Cara 1
// Membuat Element <div>
const div3 = document.createElement('div'); 
div3.innerHTML = "<strong>Modifying EL 1 - Cara 1</strong>" 
// Menambahkan <div3> ke body
body.append(div3); 

// Cara 2
// Membuat Element <div>
const div4 = document.createElement('div'); 
// Membuat Element <strong>
const strong = document.createElement('strong');
strong.innerText = "Modifying EL 2 - Cara 2"; 
// Menambahkan <strong> ke div4
div4.append(strong); 
// Menambahkan <div4> ke body
body.append(div4); 

// 5. REMOVING ELEMENT
// Mengambil Element Div dari "index.html"
const div5 = document.querySelector('div');
// Mengambil Element Span id="hi" dari "index.html"
const spanHi = document.querySelector('#hi');
// Menghapus <span id="hi"> ke body
spanHi.remove();
// Menambahkan <span id="hi"> ke body
/* 
    div.append(spanHi);
*/

// 6. MODIFYING ELEMENT ATTRIBUTES
// Mengambil Element Span id="hi2" dari "index.html"
const spanHi2 = document.querySelector('#hi2');
// Cara 1 Menampilkan Attributes
console.log(spanHi2.getAttribute('id'));
console.log(spanHi2.getAttribute('title'));
// Cara 2 Menampilkan Attributes
console.log(spanHi2.id);
console.log(spanHi2.title);
// Mengubah Attributes
console.log(spanHi2.id = 'Hello id berubah');
console.log(spanHi2.title = 'Hello title berubah');
// Menghapus Attributes
spanHi2.removeAttribute = 'title';

// 7. MODIFYING DATA ATTRIBUTES
// Mengambil Element Span id="hi3" dari "index.html"
const spanHi3 = document.querySelector('#hi3');
// Menampilkan Seluruh Data Attributes
console.log(spanHi3.dataset);
// Menampilkan 1 per 1 Data Attributes 
console.log(spanHi3.dataset.test);
console.log(spanHi3.dataset.longerName);
// Menambahkan Data Attributes Baru ke Dalam Span id="hi3" dari "index.html"
console.log(spanHi3.dataset.newName = "Data Baru");

// 8. MODIFYING ELEMENT CLASSES
// Mengambil Element Span id="hi4" dari "index.html"
const spanHi4 = document.querySelector('#hi4');
// Menambahkan Class Baru dibelakang span id="hi4"
spanHi4.classList.add('new-class');
// Menghapus Class "h1" dibelakang span id="hi4"
spanHi4.classList.remove('hi1');
/* 
Menambah / Menghapus Class "h3" di span id="hi4" 
jika tidak ada class h3 maka akan ditambah
jika ada maka akan dihapus
*/

spanHi4.classList.toggle('hi3', true); // false = remove

// 9. MODIFYING ELEMENT STYLES
spanHi4.style.backgroundColor = 'red';