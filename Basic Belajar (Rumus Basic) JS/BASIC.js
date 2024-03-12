// (Basic JAVASCRIPT)

// Alert
// alert ('Hello World ! Its Me Bintang')

// Console
// console.log('Library')
// (Console Date Time/Waktu)
// console.log(new Date());

// Prompt
// let usia = prompt('berapa usia anda?')

// alert('Usia anda adalah ' + usia)
// (Materi Conditional Statement)
// let nama = "Bintang Diandra Putra"; // Tipe String
// let usia = "19"; //Tipe Interger Number
// let tinggiBadan = "160.5"; //Tipe Double Float
// let beratBadan;
// let pacar = 3;

// (Contoh If dan else`)
// beratBadan = "60";
// if (pacar == null) {
//     pacar = "belum punya";
// } else {
//     pacar = "udah punya";
// }

// beratBadan = "65";

// (Conth Swtich Case Break)
// switch (pacar) {
//   case 1:
//     pacar = "Punya 1 saja";
//     break;
//   case 2:
//     pacar = "Punya 2 saja, Aku adalah playboy";
//     break;
//   case 3:
//     pacar = "Pacar ku banyak, karena saya mbah surip";
//     break;
//   default:
//     pacar = "Belum punya pacar";
//     break;
// }
// Contoh Panjang
// // alert(' Nama Anda adalah ' + nama + ' Dan Usia anda adalah ' + usia + ' Berat badan saya adalah ' + tinggiBadan)
// alert(
//   `Nama Saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan}Cm dan berat badan saya ${beratBadan}Kg pacar saya ${pacar}`
// );

// JS Operator
// let saldoAwal = 50000;
// let saldoTambahan = 100000;
// let saldoTerpotong = 70000;
// const saldoAkhir = saldoAwal + saldoTambahan;
// const saldoAkhir2 = saldoAwal + saldoTambahan - saldoTerpotong;

// let x = 100
// let y = 2
// const z = x / y

// alert(`Nilai dari z adalah ${z}`)

// // Alert Operator ========>
// alert(
//   `Saldo awal anda sebesar Rp.${saldoAwal} Dan tambahan saldo anda menjadi Rp.${saldoTambahan} jadi total anda memiliki saldo sebesar Rp.${saldoAkhir} dan saldo anda terpotong karena biaya admin total saldo anda sebesar Rp.${saldoAkhir2}`
// );

// Array
// let namaGuru = [`Jodi `, `Bunga `, `Doni `]
// namaGuru.push (`Bintang `, `Fikri `)
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru)

// let namaGuru = []

// namaGuru[0] = `Bintang`
// namaGuru[1] = `Fikri`
// namaGuru.shift()

// alert(namaGuru)

//(Materi Loop)

// const namaGuru = [`Bintang`, `Fikri`, `Bakso`, `Bunga`];
// console.log(namaGuru.length);
// for (let i = 0; i < namaGuru.length; i++) {
//   console.log(namaGuru[i]);
// }
// for (let i = 0; i < namaGuru.length; i++) {
// console.log(namaGuru[i])
// }
// (Console Date Time/Waktu)

// (Do-while vs While-Loop)

// (While)
// let i = 0
// while (i < 5 ) {
//  i++
//  console.log('Bintang')
// }

// (Do)
// let i = 0
// do {
//   i++
//   console.log('Bintang')
// } while (i < 10)

// Tugas kecil
// Nomer 1

// Jawaban
// let jumlahSaldoawal = Number(prompt('Masukan saldo Awal kamu Rp.'))
// let jumlahSaldotambahan = Number(prompt('Masukan saldo tambahan kamu Rp.'))
// const jumlahSaldoakhir = jumlahSaldoawal + jumlahSaldotambahan
// alert(`Jadi jumah total saldo anda sebesar Rp.${jumlahSaldoakhir}`)

// Nomer 2

// Jawaban Pertama
// const hari = [`Sabtu`, `Minggu`, `Senin`, `Selasa`, `Rabu`, `Kamis`, `Jumat`];
// const hariIndex = new Date().getDay();
// const dayname = hari[hariIndex];
// console.log(`Hari ini adalah hari ${dayname}`);

// // Jawaban Kedua
// let i = new Date().getDay()
// let o = i-1
// let hari = [`Senin`, `Selasa`, `Rabu`, `Kamis`, `Jumat`, `Sabtu`, `Minggu`]
// console.log(`Hari ini adalah Hari `+ hari[o])
