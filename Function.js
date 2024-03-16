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

//---------------------------------------------------------------  // varibel console.log() harus dibawah !!!!

// Function yang diterapkan di Industri

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

sum1(5, 1);
sum2(1, 2);
sum3(1, 4);

// Materi lanjutan

function mergeNames(userId, passworidId) {
  const mergedNames = [];

  for (let i = 0; i < userId.length; i++) {
    mergedNames.push(`${userId[i]} & ${passworidId[i]}`);
  }

  return mergedNames;
}

// Contoh penggunaan fungsi mergeNames()
const userId = ["Alice", "Bob", "Charlie"];
const passworidId = ["Dave", "Eve", "Frank"];

const mergedNames = mergeNames(userId, passworidId);
console.log(mergedNames);


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Contoh penggunaan:
setCookie('username', 'john_doe', 30); // Menetapkan cookie 'username' dengan nilai 'john_doe' yang berlaku selama 30 hari

function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Contoh penggunaan:
let username = getCookie('username'); // Mendapatkan nilai cookie 'username'

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Contoh penggunaan:
deleteCookie('username'); // Menghapus cookie 'username'