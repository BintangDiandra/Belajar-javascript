// Array
//Ingat .length <-------Digunakan untuk melihat panjang data (Perhatikan !!!!! )

// Contoh Pertama

// const arraySaya = [`Semangka`, `Pisang`, `Mangga`];
// const Waktu = new Date();
// console.log(arraySaya, Waktu);

// Contoh Kedua

// const arrayKamu = [];
// arrayKamu[0] = `Kucing`;
// arrayKamu[1] = `monyet`;
// arrayKamu[2] = `Harimau`;
// console.log(arrayKamu);

// const arrayKita = [`Bintang`, `Indra`, `Vina`, `Vani`];
// console.log(arrayKita);

// Contoh pemanggilan array
// [] <----- bisa dipakai untuk pemanggilan array
// Contoh const arraySemua = []
//        arraySemua[0] = `Money`
//        arraySemua[1] = `Banana`
//        arraySemua[2] = `Aligator`
// Contoh Console Log nya <------
// Console.log(arraySemua[2]<------- Otomatis yang dipanggil adalah String *Aligator*)

// Contoh Ketiga
// new Array() <-------Pemanggilan Object
// const arrayMe = new Array();
// arrayMe[0] = `Jajan`;
// arrayMe[1] = `Es Teh`;
// arrayMe[2] = `Cookies`;
// console.log(arrayMe[2]);

// Contoh Keempat + Includes

// const arrayBuah = [`Ap`, `Rambu`, `Jrk`, `Aur`, `Mgga`];
// const semangka = arrayBuah.includes(`Jrk`);

// Menggunaka If dan Else Contoh Kelima
// If <-------- = ( Jika ) Else <---------- = ( Maka )
// if (semangka) {
//   const posisiSingkatan = arrayBuah.indexOf(`Jrk`);
//   const indexBefore = posisiSingkatan - 1;
//   const indexAfter = posisiSingkatan + 1;
//   const before = arrayBuah[indexBefore];
//   const after = arrayBuah[indexAfter];
//   console.log(`Posisi buah sebelum Singkatan ${before}`);
//   console.log(`Di urutan berapa posisi index semangka - ${posisiSingkatan}`);
//   console.log(`Posisi buah sesudah Singkatan ${after}`);
// } else {
//   console.log(`Dimanakah posisi semangka?`);
// }

// Contoh KeEnam (Menggunaka If & Else)
// const arrayBuah = [`🍇`, `🍈`, `🍉`, `🍊`, `🍋`];
// const posisi = arrayBuah.includes(`🍊`);
// const posisiBuah = arrayBuah.indexOf(`🍊`);

// if (arrayBuah) {
//   const posisiBuah = arrayBuah.indexOf(`🍊`);
//   const indexBefore = posisiBuah - 1;
//   const indexAfter = posisiBuah + 1;
//   const before = arrayBuah[indexBefore];
//   const after = arrayBuah[indexAfter];
//   console.log(`Sebelum buah semangka adalah posisi - ${before}`)
//   console.log(`Sesudah buah semangka adalah posisi - ${after}`)
//   console.log(`Buah Semangka ada diposisi ke - ${posisiBuah}`);
// } else {
//     console.log (`Tidak ditemukan posisi buah nya`)
// }

// Contoh KeTujuh
// const arrayBuah = [`🍇`, `🍈`, `🍉`, `🍊`, `🍋`]; //.Lenght 5 (Panjang data) //Note Tidak pakai lima maka data dihitung dari 0
// const posisi = arrayBuah.includes(`🍉`);
// const posisiBuah = arrayBuah.indexOf(`🍉`);

// if (arrayBuah) {
//   const posisiBuah = arrayBuah.indexOf(`🍉`);
//   const indexBefore = posisiBuah - 1;
//   const indexAfter = posisiBuah + 1;
//   const before = arrayBuah[indexBefore];
//   const after = arrayBuah[indexAfter];
//   console.log(`Sebelum buah semangka adalah posisi - ${before}`);
//   console.log(`Sesudah buah semangka adalah posisi - ${after}`);
//   console.log(`Posisi Buah ini ada di urutan ke- ${posisiBuah}`);
//   const buahAwal = arrayBuah[0]; // .shift atau juga bisa pakai [`Angka data`] <--- opsional (untuk mengetahui bahan pertama !)
//   console.log(`Buah awal adalah ${buahAwal}`);
//   const buahAkhir = arrayBuah[arrayBuah.length -1] // .pop atau juga bisa memakai [Namaconst.length -1] <----- Opsional (untuk mengetahui bahan terakhir) !
//   console.log(`Buah Akhir adalah ${buahAkhir}`);
// } else {
//   console.log(`Tidak ditemukan posisi buah nya`);
// }

//Contoh KeDelapan
// const arrayBuah = []
// arrayBuah[`Lemon`] = `🍋`           // <------------- Pemanggilan array
// arrayBuah[`Semangka`] = `🍉`
// arrayBuah[`Anggur`] = `🍇`
// console.log(arrayBuah [`Lemon`])

// Array Shallow Copy And Deep Copy
// const buahBuahan = [`🍇`, `🍈`, `🍉`, `🍊`, `🍋`, `🍎`] 
// const cloneBuah1 = [...buahBuahan]      // < ========== Ini adalah Contoh Shallow Copy Cara Pertama
// const cloneBuah2 = buahBuahan.slice()   // < ========== Ini adalah contoh Shallow Copy Cara Kedua
// buahBuahan [0] = `❤️`
// cloneBuah1 [0] = `❌`
// cloneBuah2 [0] = `😒`

// console.log(buahBuahan)
// console.log(cloneBuah1)
// console.log(cloneBuah2)

// Array Dengan Macam Macam Object
// const dataArray = [`🍉`, `10`, {tomato: true}, [`Makan`, `Food`]]
// console.log(dataArray[3][0]) // <----- Dibutuh kan dua ([][]) untuk memanggil array didalam array :)

// Array Dengan Object Function
// const dataArray = 
//     `🍉`, 
//     `10`, 
//     {tomato: function() {                   // <------ Contoh Funciton di array
//         console.log(`Benar Ini Adalah Tomat 🍎`)
//     }}, 
//     [`Makan`, `Food`]
// ]
// dataArray[2].tomato()       // < ===========untuk memanggil data function di dalam array


// Array Dengan Object Function
// const dataArray = [
//     `🍉`, 
//     `10`, 
//      {tomato: function() {                   // <------ Contoh Funciton di array
//          console.log(`Benar Ini Adalah Tomat 🍎`)   }},    [`Makan`, `Food`]
//  ]
//  dataArray[2].tomato()       // < ===========untuk memanggil data function di dalam array   

// < ======== Contoh Kedua copy array dengan shallow array
//  const originalArray = [1, 2, 3];
// originalArray[3] = `4`  
//  const shallowCopyArray = [...originalArray];
//  shallowCopyArray[3] = `6`

// console.log(originalArray)
// console.log(shallowCopyArray)

// Dual Array / Merge Array / Concat / Juga bisa di sebut penggabungan Array
// const arraySaya = [`😒`, `😊`, `😂`]
// const arrayKamu = [`🍎`, `🍌`, `🍊`]

// const mergeArray = arraySaya.concat(arrayKamu)

// for(list of mergeArray) console.log(list)   //<======= Digunakan untuk melist array menjadi 1 baris (List adalah kata <------- Beware!)  
// mergeArray.map((value, index) => console.log(value, index))  // Digunakan untuk melihat urutan angka didepan data (Array) Value ada data index ada nomer misal (index, value)
// Maka angka akan di depan dan juga sebaliknya

const datas = [ 
    {                                                       // <------ Contoh Object
        name: `Bintang Diandra Putra`,   
        stack: `Html CSS tailwindcss`,
        age: `19`,
    },
    {
        name: `Diandra Putra`,
        stack: `Javascript CSS tailwindcss`,
        age: `29`,
    },
    {
        name: `Putra`,
        stack: `PHP Laravel Sql MySQL`,
        age: `32`,
    },
    {
        name: `Pinto`,
        stack: `PHP Laravel`,
        age: `16`,
    }
]

// datas.map((values, index) => {
//     console.log(values, name)
// })

datas.filter((x) => x.age > 20).map((values) => console.log(values.name)) // x.age > 20(angka lain) maka data akan diambil diatas 20 