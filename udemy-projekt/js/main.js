"use strict";


const prompt = require("prompt-sync")();
let einnahmen =0, ausgaben =0, bilanz =0;

let titel, type,betrag,datum;

const eintrag_erfassen=function(){
    titel = prompt("Titel: ");
    type = prompt("Type(Einnahme oder ausgaben): ");
    betrag = parseInt(prompt("Betrag (in cent): "));
    datum = prompt("Datum(jjj-mm-tt)");
};

const eintrag_ausgaben = function(titel,type,betrag,datum){
    console.log(`Titel: ${titel}
Type: ${type}
Betrag: ${betrag} ct
Datum: ${datum} `
);

};


const eintag_mit_gesamtbilanz = function(type, betrag){
    if (type == "Einnahme"){
        einnahmen+=betrag;
        bilanz = bilanz + betrag;
    }
    else{
        ausgaben+=betrag;
        betrag -=betrag;
    }

};


// // console.log(`
// // Titel: ${titel_2}
// // Type: ${type_2}
// // Betrag: ${betrag_2}
// // Datum: ${datum_2}`);

// if (betrag_2== "Einnahme"){
//     einnahmen+=type_2;
// }
// else{
//     ausgaben+=type_2;
// }


const ausgeben_gesamtbilanz = function (einnahmen,ausgaben,bilanz) { 
    
    let positive = bilanz>=0;
    console.log(
        `Einnahmen: ${einnahmen} ct
        Ausgaben: ${ausgaben} ct
        Bilanz: ${bilanz>=0}`
    
    );

   
    
};



const gesamt_auszufuhren = function(){
    eintrag_erfassen();
    eintrag_ausgaben(titel,type,betrag,datum);
    eintag_mit_gesamtbilanz(type,betrag);
    ausgeben_gesamtbilanz(einnahmen,ausgaben,bilanz);
    



};
gesamt_auszufuhren();