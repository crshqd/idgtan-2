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
        elem.setAttribute("value", "./letter.html#"+letters[i]);
        links.appendChild(elem);
    }
});
function go() {
    
}