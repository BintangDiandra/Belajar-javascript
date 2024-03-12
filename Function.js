
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

function addName() {
    console.log(arguments[0])      //Arguments pemanggilan langsung bisa di tambahkan  ['1', '2', '3'] untuk memanggi data
    console.log(arguments[1])
    console.log(arguments[2])
}

addName('Bintang Diandra Putra', 'Diandra Putra', 'Aril Noah')