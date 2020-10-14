var nama = ["Fransiscus Xaverius Senduk", "Anastasya Anggereany Eliana Lumowa", "Romario Lendo", "Monalisa Hanna Runtulalo"]
nama.forEach(printNama);

function printNama(item) {
    document.getElementById("namamhs").innerHTML += item;
}