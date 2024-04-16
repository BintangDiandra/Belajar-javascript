/*
Materi Looping Javascript
! PERULANGAN DI JAVASCIPT
? for, for of, for in, foreach
* While & Do While
**/

//Perbedaan memakai let di looping maka
//maka data yang di tampilkan akan kebawah secara menyeluruh

const namaKeluarga = [`Bintang`, `Indra`, `Vani`, `Vina`]
    console.log(namaKeluarga)

    for(length =0; length < namaKeluarga.length; length++)              //length digunakan untuk menghilangkan data pertama
    console.log(namaKeluarga[length])

for (let keluarga of namaKeluarga)
    console.log(keluarga)
