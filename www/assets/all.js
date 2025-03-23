document.addEventListener("DOMContentLoaded", ()=>{
    for (let i = 0; i < games.length; i++) {
        elem = document.createElement("a");
        elem.innerText = games[i]["title"];
        elem.href = games[i]["link"];
        document.getElementById("all").appendChild(elem);
        elem = document.createElement("br");
        document.getElementById("all").appendChild(elem);
    }
});