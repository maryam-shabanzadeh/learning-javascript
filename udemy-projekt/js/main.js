"use strict";
let einnahmen =0;
let ausgaben =0;
let bilanz =0;

const prompt = require("prompt-sync")();

let titel_1, type_1,betrag_1,datum_1;

function eintrag_erfassen(titel_1,titel_2,betrag_1,betrag_2){
    titel_1 = prompt("Titel: ");
    type_1 = prompt("Type(Einnahme oder ausgaben: ");
    betrag_1 = prompt(parseInt("Betrag (in cent): "));
    datum_1 = prompt("Datum(jjj-mm-tt)");

    
}

console.log(`Type: ${titel_1}
Type: ${type_1}
Betrag: ${betrag_1}
Datum: ${datum_1} `
);

if (type_1 == "Einnahme"){
    einnahmen+=betrag_1;
    bilanz = bilanz + betrag_1;
}
else{
    ausgaben+=betrag_1
}
let titel_2 = prompt("Titel: ");


let type_2 = prompt("Type(Einnahme oder ausgaben: ");

let betrag_2 = parseInt(prompt("Betrag (in cent): "));


let datum_2 = prompt("Datum(jjj-mm-tt): ");

console.log(`
Titel: ${titel_2}
Type: ${type_2}
Betrag: ${betrag_2}
Datum: ${datum_2}`);

if (betrag_2== "Einnahme"){
    einnahmen+=type_2;
}
else{
    ausgaben+=type_2;
}
let positive = bilanz >=0;
//Gesamtbilanz
console.log(
    `Einnahmen: ${einnahmen} ct
    Ausgaben: ${ausgaben} ct
    Bilanz: ${positive}`

);
