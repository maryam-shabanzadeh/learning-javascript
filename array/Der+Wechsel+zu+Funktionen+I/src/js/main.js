"use strict";

// Gesamtbilanz anlegen
let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel, 
    typ, 
    betrag, 
    datum;

const eintrag_erfassen = function() {
    titel = prompt("Titel:");
    typ = prompt("Typ (Einnahme oder Ausgabe):");
    betrag = parseInt(prompt("Betrag (in Cent):"));
    datum = prompt("Datum (jjjj-mm-tt):");
};

eintrag_erfassen();

console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
);

// if (typ_1 === "Einnahme") {
//     einnahmen = einnahmen + betrag_1;
//     bilanz = bilanz + betrag_1;
// } else if (typ_1 === "Ausgabe") {
//     ausgaben = ausgaben + betrag_1;
//     bilanz = bilanz - betrag_1;
// } else {
//     console.log(`Der Typ "${typ_1}" ist nicht bekannt.`);
// }

// console.log(`Titel: ${titel_2}
// Typ: ${typ_2}
// Betrag: ${betrag_2} ct
// Datum: ${datum_2}`
// );

// if (typ_2 === "Einnahme") {
//     einnahmen = einnahmen + betrag_2;
//     bilanz = bilanz + betrag_2;
// } else if (typ_2 === "Ausgabe") {
//     ausgaben = ausgaben + betrag_2;
//     bilanz = bilanz - betrag_2;
// } else {
//     console.log(`Der Typ "${typ_2}" ist nicht bekannt.`);
// }

// // Gesamtbilanz ausgaben
// let positiv = bilanz >= 0;

// console.log(`Einnahmen: ${einnahmen} ct
// Ausgaben: ${ausgaben} ct
// Bilanz: ${bilanz} ct
// Bilanz ist positiv: ${positiv}`
// );
