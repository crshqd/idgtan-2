document.addEventListener("DOMContentLoaded", ()=>{
    let letters = Array(36).fill("");
    let alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < games.length; i++) {
        if (games[i]["title"][0] != undefined && !letters.includes(games[i]["title"][0].toUpperCase())) {
            letters[alphabet.indexOf(games[i]["title"][0].toUpperCase())] = games[i]["title"][0].toUpperCase();
        } else {
            continue;
        }
    }
    let links = document.getElementById("letters");
    let elem;
    for (let i = 0; i < 36; i++) {
        if (letters[i] == "") {
            continue
        }
        elem = document.createElement("option");
        elem.innerText = letters[i];
        elem.setAttribute("value", letters[i]);
        links.appendChild(elem);
    }
});
function go() {
    let letter = document.getElementById("letters").selectedOptions[0];
    location.href = "./letter.html#" + letter.value;
}
function search() {
    let elem;
    document.getElementById("results").innerHTML = "";
    for (let i = 0; i < games.length; i++) {
        if (games[i]["title"].toLowerCase().startsWith(document.getElementById("jlq1x").value.toLowerCase())) {
            elem = document.createElement("a");
            elem.href = games[i]["link"];
            elem.innerText = games[i]["title"];
            document.getElementById("results").appendChild(elem);
            elem = document.createElement("br");
            document.getElementById("results").appendChild(elem);
        }
    }
}