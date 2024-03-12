// Belajar Dom Basic Javascript Data Manipulasi


// Materi Pertama Document Title

//  document.title = "Tittle Baru"; <---- Digunakan untuk mengganti title website dengan javascript
//                    "Nama_title"; <---- Digunakan untuk menampilkan nama title website
console.log(document.title)
document.title = "Title Dom JS"
console.log(document.title)

// Materi Kedua Document Body
// console.log(document.body)

// Materi Ketiga Create & Combine Dom
// const h1 = document.createElement('h1') <---- Digunakan untuk membuat element <h1></h1>       <---- Untuk membuat body menggunakan javascript 
// h1.textContent = `Ini adalah h1`                           *Tidak bisa dimunculkan karena sudah disetting <meta> !*

// body.append(h1)

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

console.log(btn1)
