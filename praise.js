const praises = ["o suficiente", "incrível", "sensacional", "top", "mara", "supimpa", "legal", "gente boa", "massa", "demais", "topster"];

function raffle() {
    let random = Math.floor(Math.random() * praises.length);
    document.getElementById("placeholder").innerHTML = praises[random];
}