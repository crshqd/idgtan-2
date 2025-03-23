document.addEventListener("DOMContentLoaded", ()=>{
    let letter = location.hash.substring(1);
    let elem;
    document.getElementById("letter").innerText = letter;
    for (let i = 0; i < games.length; i++) {
        if (games[i]["title"].startsWith(letter)) {
            elem = document.createElement("a");
            elem.innerText = games[i]["title"];
            elem.href = games[i]["link"];
            document.getElementById("results").appendChild(elem);
            elem = document.createElement("br");
            document.getElementById("results").appendChild(elem);
        }
    }
});