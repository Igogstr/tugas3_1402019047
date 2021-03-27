function silinder() {
    let r = document.getElementById("s-jari").value;
    let h = document.getElementById("s-tinggi").value;
    let luas = 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
    let volume = Math.PI * Math.pow(r, 2) * h;
    document.getElementById("s-luas").innerHTML = luas.toFixed(2);
    document.getElementById("s-volume").innerHTML = volume.toFixed(2);

}

function kerucut() {
    let r = document.getElementById("k-jari").value;
    let h = document.getElementById("k-tinggi").value;
    let s = document.getElementById("k-garis").value;

    let luas = Math.PI * Math.pow(r, 2) + Math.PI * r * s;
    let volume = 1 / 3 * Math.PI * Math.pow(r, 2) * h;
    document.getElementById("k-luas").innerHTML = luas.toFixed(2);
    document.getElementById("k-volume").innerHTML = volume.toFixed(2);

}

function bola() {
    let r = document.getElementById("b-jari").value;
    let luas = 4 * Math.PI * Math.pow(r, 2);
    let volume = 4 / 3 * Math.PI * Math.pow(r, 3);
    document.getElementById("b-luas").innerHTML = luas.toFixed(2);
    document.getElementById("b-volume").innerHTML = volume.toFixed(2);

}







let nama = prompt("Selamat Datang, Masukkan Nama Anda!");
let date = new Date();
let jam = date.getHours();
let waktu;

if (jam < 12) {
    waktu = "Pagi";
} else if (jam >= 12 && jam <= 15) {
    waktu = "Siang"
} else if (jam >= 16 && jam <= 18) {
    waktu = "Sore"
} else {
    waktu = "Malam"
}

document.getElementById("waktu").innerHTML = waktu;
document.getElementById("nama").innerHTML = nama;