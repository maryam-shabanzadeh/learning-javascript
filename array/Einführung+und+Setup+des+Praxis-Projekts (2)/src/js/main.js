"use strict";
const prompt = require("prompt-sync")();

let titel_1 = prompt("Titel: ");

let type_1 = prompt("Type(Einnahme oder ausgaben${type_1}");

let betrag_1 = prompt(parseInt("Betrag (in cent): "));

let datum_1 = prompt("Datum(jjj-mm-tt)");

console.log(`Type: ${titel_1}
Type: ${type_1}
Betrag: ${betrag_1}
Datum: ${datum_1} `
);

if (betrag_1== "Einnahme"){
    einnahmen+=betrag_1;
    bilanz = bilanz + betrag_2;
}
else{
    ausgaben+=betrag_1
}


let type_2 = prompt("Type(Einnahme oder ausgaben: ");

let betrag_2 = parseInt(prompt("Betrag (in cent): "));


let datum_2 = prompt("Datum(jjj-mm-tt): ");

console.log(`
Type: ${type_2}
Betrag: ${betrag_2}
Datum: ${datum_2}`);

if (betrag_2== "Einnahme"){
    einnahmen+=betrag_2;
}
else{
    ausgaben+=betrag_2
}

//Gesamtbilanz
console.log(
    `Einnahmen: ${einnahmen}
    Ausgaben: ${ausgaben}
    Bilanz: $`

)
let einnahmen=0;
let ausgaben=0;
let bilanz = betrag_1 + betrag_2;
console.log(`Bilanz: ${bilanz}`);
let positive = bilanz >=0;
console.log(`Bilanz ist positive: ${positive}`);

