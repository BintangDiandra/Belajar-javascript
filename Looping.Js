/*
Materi Looping Javascript
! PERULANGAN DI JAVASCIPT
? for, for of, for in, foreach
* While & Do While
**/

for (let Data = 0; Data <= 5; Data++) {
    console.log('Urutan Data -', Data)                                    // Ini adalah cara looping sederhana
}

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



var sum3 = (x, y) => {
    console.log(x + y);
}

sum3(2, 2)



