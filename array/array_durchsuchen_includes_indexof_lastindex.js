"use strict";
let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Marcel",
    "Mia"
];

//include(): wenn es git array true zrück

console.log(personen.includes("Marcel",2));

//indexOf(): Durchsucht das Array ab einem Startindex, wenn gefunde werde index züruck gegeben ansonsten -1 zurück
console.log(personen.indexOf("Marcel"));
//lastindexOf

console.log(personen.lastIndexOf("Marcel"));