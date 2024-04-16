/*
Materi Looping Javascript
! PERULANGAN DI JAVASCIPT
? for, for of, for in, foreach
* While & Do While
**/

for (let Data = 0; Data <= 5; Data++) {
    console.log('Urutan Data -', Data)                                    // Ini adalah cara looping sederhana
}

for (let DataGenap = 0; DataGenap <= 5; DataGenap++) {
    if(DataGenap % 2 !== 1)
    console.log('Urutan Data Genap -', DataGenap)                                    // Contoh Genap Looping
}

for (let DataGanjil = 0; DataGanjil <= 5; DataGanjil++) {
    if(DataGanjil % 2 == 1)
    console.log('Urutan Data Ganjil -', DataGanjil)                                  // Contoh Ganjil Looping
}

//---Contoh Menggunakan Let
// let x = 1
// while (x <= 5) {
//     console.log('Urutan Data X -', x)
//     x++
// }

//Let Menggunakan While
// let xGanjil = 1                                                             // Contoh While Ganjil Looping
// while (xGanjil <= 5) {
//     if(xGanjil % 2 == 1)
//     console.log('Urutan Data X Ganjil -', xGanjil)
//     xGanjil++
// }

// let xGenap = 1                                                             // Contoh While Genap Looping    
// while (xGenap <= 5) {
//     if(xGenap % 2 !== 1)
//     console.log('Urutan Data X Genap -', xGenap)
//     xGenap++
// }

// // Contoh Menggunakan Do While
// let y = 1
// do {
//     console.log('Urutan Data Y -', y)
//     y++
// }while(y <= 5)

// // Contoh Menggunakan Do While
// let yGenap = 1                                                             // Do While Genap
// do {
//     if(yGenap % 2 !== 1)
//     console.log('Urutan Data yGenap -', yGenap)
//     yGenap++
// }while(yGenap <= 5)

// let yGanjil = 1                                                            //Do While Ganjil
// do {
//     if(yGanjil % 2 == 1)
//     console.log('Urutan Data yGanjil -', yGanjil)
//     yGanjil++
// }while(yGanjil <= 5)


// Urutan data - 1   --------------- z  = 2
// Urutan data - 2   --------------- z  = 3
// Urutan data - 3   --------------- z  = 4
// Urutan data - 4   --------------- z  = 5
// Urutan data - 5   --------------- z  = 6

// z = 6 karena z sudah lebih dari sama dengan 5
// 👇👇👇
// end of loop tidak akan masuk 


function randomize1() {
    const randomNumber = ~~(Math.random() * 5);
    if (randomNumber < 2) {
        console.log("Masuk Postif");
    } else {
        console.log("Masuk Negatif");
    }
}

randomize1()

// var y = 5
// var x = 100
// var i = x + y
// console.log(i)

// Contoh Soal
/* Buat perulangan dari suatu variable bertipe array contoh : 
const x =[3, 5, 12];
//Loop data
//total nilai adalah 20 karena 3 + 5 + 12 = 20
**/

//const x = [3, 5, 12];
//let total = 0;
//for (let y = 0; y < x.length; y++) {
//  total += x[y];
//}
//console.log(`Total nilai adalah ${total} karena 3 + 5 + 12 = ${total}`);

// while 
// const x = [3, 5, 12];
// let total = 0;
// let z = 0;
// while (z < x.length) {
//   total += x[z];
//   z++;
// }
// console.log(`Total nilai adalah ${total} karena 3 + 5 + 12 = ${total}`);

//do while
const x = [3, 5, 12];
    let total = 0;
    let c = 0;
        do {
        total += x[c];
        c++;
    } while (c < x.length);
    console.log(`Total nilai Data x ${total} karena 3 + 5 + 12 = ${total}`);

