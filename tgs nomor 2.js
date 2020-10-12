const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Masukkan Nilai Tugas 1 : ');
var Tugas1 = rl;
console.log('Masukkan Nilai Tugas 2 : ');
var Tugas2 = rl;
console.log('Masukkan Nilai Tugas 3 : ');
var Tugas3 = rl;
console.log('Masukkan Nilai Tugas 4 : ');
var Tugas4 = rl;
console.log('Masukkan Nilai Tugas 5 : ');
var Tugas5 = rl;
console.log('Masukkan Nilai Proyek UTS: ');
var ProyekUTS = rl;
console.log('Masukkan Nilai Proyek UAS: ');
var ProyekUAS = rl;

var tugas = Number(Tugas1, Tugas2, Tugas3, Tugas4, Tugas5);
var puts = Number(ProyekUTS);
var puas = Number(ProyekUAS);


function hitungTugas(tugas) {
    return tugas * 0.5;
}

function hitungProyekUTS(puts) {
    return puts * 0.25;
}

function hitungProyekUAS(puas) {
    return puas * 0.25;
}

var nilaiTugas = Number(hitungTugas(tugas).toFixed(2));
var nilaiProyekUTS = Number(hitungProyekUTS(puts).toFixed(2));
var nilaiProyekUAS = Number(hitungProyekUAS(puas).toFixed(2));

function hitungTotal() {
    return nilaiTugas + nilaiProyekUTS + nilaiProyekUAS;
    }

var nilaiTotal = hitungTotal();

function grade() {

    if (nilaiTotal >= 80) {
        hasil = 'A';
    } 
    else if (nilaiTotal >= 76 && nilaiTotal < 80) {
        hasil = 'B+';
    } 
    else if (nilaiTotal >= 70 && nilaiTotal < 76) {
        hasil = 'B';
    } 
    else if (nilaiTotal >= 65 && nilaiTotal < 70) {
        hasil = 'C+';
    } 
    else if (nilaiTotal >= 60 && nilaiTotal < 65) {
        hasil = 'C';
    }
    else if (nilaiTotal >= 50 && nilaiTotal < 60) {
        hasil = 'D';
    }
    else {
        hasil = 'E';
    }
      return hasil;
}

function hasilPenilaian() {
    if (nilaiTotal >= 60) {
        ket = 'LULUS';
    }
    else {
        ket = 'TIDAK LULUS';
    }
}

function penilaian(hasilPenilaian) {
    console.log('Anda Dinyatakan : '+hasilPenilaian);
}
