function hitung() {
    var Tugas1 = parseFloat(document.getElementById("tugas1").value);
    if(isNaN(Tugas1)) Tugas1=0.0;
    var Tugas2 = parseFloat(document.getElementById("tugas2").value);
    if(isNaN(Tugas2)) Tugas2=0.0;
    var Tugas3 = parseFloat(document.getElementById("tugas3").value)
    if(isNaN(Tugas3)) Tugas3=0.0;
    var Tugas4 = parseFloat(document.getElementById("tugas4").value);
    if(isNaN(Tugas4)) Tugas4=0.0;
    var Tugas5 = parseFloat(document.getElementById("tugas5").value);
    if(isNaN(Tugas5)) Tugas5=0.0;
    var ProyekUTS = parseFloat(document.getElementById("uts").value);
    if(isNaN(ProyekUTS)) ProyekUTS=0.0;
    var ProyekUAS = parseFloat(document.getElementById("uas").value);
    if(isNaN(ProyekUAS)) ProyekUAS=0.0;

    var tugas = (Tugas1 + Tugas2 + Tugas3 + Tugas4 + Tugas5) * 0.1;
    var puts = ProyekUTS * 0.25;
    var puas = ProyekUAS * 0.25;

    var nilaiTotal = tugas + puts + puas;

    var hasil = 'A';
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
    
    var ket = 'LULUS';
    if (nilaiTotal >= 60) {
        ket = 'LULUS';
    }
    else {
        ket = 'TIDAK LULUS';
    }

    document.getElementById("nangka").innerHTML = 'Angka : '+nilaiTotal;
    document.getElementById("nhuruf").innerHTML = 'Huruf : '+hasil;
    document.getElementById("kelulusan").innerHTML = 'Anda dinyatakan : '+ket;
}

function resetForm() {
    document.getElementById("ftugas").reset();
    document.getElementById("fproyek").reset();
}