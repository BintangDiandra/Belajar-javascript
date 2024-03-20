// Materi Pertama Function JAVASCRIPT

// *Pemanggilan Function*

// function addName(fullname) {
//     return fullname      // Function harus mengembalikan nilai | Kalau return tidak ada maka mengembalikan undefined
// }

// alert(addName('Bintang Diandra Putra'))
// function addName(firstname, lastname) {         // pengiriman data ke function
//     console.log('Nama depan : ', firstname)     //function firstname, lastname anggap saja data 1 (first name) data ke 2 (lastname)
//     console.log('Nama belakang : ', lastname)   // addName <--- Adalah Function
// }
//             // 'Bintang Diandra Putra', 'Diandra Putra' <=---- ini adalah Argumen yang kita ketik
// addName('Bintang Diandra Putra', 'Diandra Putra')     // <------- ini semua bisa di sebut patching data patching parameter patching value dll (intinya tentang patching)

// function addName() {
//     console.log(arguments[0])      //Arguments pemanggilan langsung bisa di tambahkan  ['1', '2', '3'] untuk memanggi data
//     console.log(arguments[1])
//     console.log(arguments[2])
// }
// addName('Bintang Diandra Putra', 'Diandra Putra', 'Aril Noah')
// alert('check update')

// Contoh Function dan Looping
// function addName() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log('Nama Lengkap : ', arguments[i])    // <-------- Arguments bisa di kostum misal ada 4 data tapi di ambil 1 tinggal ganti i ke argument['sesuai urutan data']
//                                                         // i [index] mengambil data
//     }
// }
// addName('Bintang Diandra Putra', 'Diandra Putra', 'Aril Noah', 'Keroro Ampas',)

// Metode Pertama pembuatan function
// function addName(firstname, lastname) {
//     console.log(firstname, lastname)
// }

// addName('Riko kucing', 'Joko kucing')

// Metode Kedua pembuatan function digabung dengan variabel
// function addName(firstname, lastname) {
//     console.log(firstname, lastname)
// }
// addName('Bintang diandra', 'Diandra Putra')

// const sum = new Function('x', 'y', 'console.log(x + y)')
// console.log(sum(1, 2))

//---------------------------------------------------------------  // varibel console.log() harus dibawah !!

// Function yang diterapkan di Industri

// Return -> console.log()
//Contoh Pertama
const data = 1                                     // Peringatan : console.log() harus dibawah dan variabel harus diatas console.log() | Kalau const maka Js tidak mengenal data tersebut
console.log(data)

var data2 = 2
console.log(data2)                                // Peringatan : console.log() harus dibawah dan variabel harus diatas console.log()  | Kalau var maka Js mengenal data tersebut namun undifined

// cara 1 keyword new function
const sum1 = new Function("x", "y", "console.log(x+y)");

//cara 2 - standar function
function sum2(x, y) {
  console.log(x + y);
}

// cara 3 arrow function
const sum3 = (x, y) => {
  console.log(x + y);
};

sum1(5, 1);                                       // variabel diatas console.log() dinamakan hoisting 
sum2(1, 2);
sum3(1, 4);

// Materi lanjutan

// function mergeNames(userId, passworidId) {
//   const mergedNames = [];

//   for (let i = 0; i < userId.length; i++) {
//     mergedNames.push(`${userId[i]} & ${passworidId[i]}`);
//   }

//   return mergedNames;
// }

// // Contoh penggunaan function mergeNames()
// const userId = ["Alice", "Bob", "Charlie"];
// const passworidId = ["Dave", "Eve", "Frank"];

// const mergedNames = mergeNames(userId, passworidId);
// console.log(mergedNames);




// Contoh pembuatan random angka/number di Javascript menggunakan Function
function randomize1() {
    console.log(~~(Math.random() * 1000))
}

randomize1()

// Contoh pembuatan random huruf/string di Javascript menggunakan Function tetapi dengan if dan else
function randomize2() {
  const randomNumber = ~~ (Math.random() * 1000)
  if (randomNumber < 500) {
      console.log('Angka melebihi 500')
  } else {
      console.log('Angka kurang dari 500')
  }
}

randomize2()


// contoh pembuatan random huruf/string di Javascript menggunakan Function
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));                //Dua ini sangat penting untuk membuat token/generate password
    }
    return result;
}
console.log(makeid(10))


/* Tugas
(A)
1. Menghitung luas lingkaran
2. Menghitung Luas segitiga
3. Menghitung Luas persegi panjang
4. Menghitung luas jajargenjang

(B)
1. menghitung total gaji yang didapat dalam satu bulan dengan input minimal:
    -gaji pokok
    -gaji perhari
    -jumlah hari masuk kerja
**/

// jAWABAN (A)
// 1. Menghitung luas lingkaran

const luasLingkaran = (jariJari) => {
    const phi = 3.14
    const luas = phi * jariJari * jariJari
    return luas
}

console.log('Luas Lingkaran =', luasLingkaran(10))

//2. Luas segitiga
const luasSegitiga = (alas, tinggi) => {
    const luas = alas * tinggi / 2
    return luas
}

console.log('Luas Segitiga =', luasSegitiga(12, 30))

//3. Luas persegi panjang
const luasPersegiPanjang = (panjang, lebar) => {
    const luas = panjang * lebar
    return luas 
}

console.log('Luas Persegi Panjang =', luasPersegiPanjang(2, 40))

//4. Luas jajargenjang
const luasJajargenjang = (alas, tinggi) => {
    const luas = alas * tinggi
    return luas
}

console.log('Luas Jajargenjang =', luasJajargenjang(4, 12))

// JAWABAN (B)
/* 1. menghitung total gaji yang didapat dalam satu bulan dengan input minimal:
    -gaji pokok
    -gaji perhari
    -jumlah hari masuk kerja
**/


