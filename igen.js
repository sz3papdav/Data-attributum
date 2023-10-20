let cellaSzinek = ["", "", "", ""];
let aktualisSzin = "red";

function szin(elem) {
    const index = elem.dataset.index;
    if (cellaSzinek[index] === "") {
        elem.style.backgroundColor = aktualisSzin;
        cellaSzinek[index] = aktualisSzin;
    } else {
        elem.style.backgroundColor = "";
        cellaSzinek[index] = "";
    }
    aktualisSzin = (aktualisSzin === "red") ? "blue" : "red";
}