let konto_1 = {
    iban: "DE623458723",
    bic:"WEASEPX",
    inhaber: {

        vorname:"maryam",

        nachname:"shabanzadeh",
        geschlecht:"femels",
        alter:37

    },
    Kontostand:3500,
    aktive:true



};
let konto_2 = {
    iban: "DE623458723",
    bic:"WEASEPX",
    inhaber:{
        vorname: "Hanie",
        nachname: "mahsomnia",
        geschlecht: "femels",
        alter: 16
    },
    Kontostand:3500,
    aktive:true



};

let werte_1 = konto_1.iban;
console.log(werte_1);

let werte_2 = konto_2.inhaber.vorname;
console.log(werte_2);

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.Kontostand}$ auf sein konto`);

// werte setzen

konto_1.abhabenlimite = 10000;

console.log(konto_1);

//werte setzen bzw. verändern(Dot-Notation)

konto_1.Kontostand = 3000;
console.log(konto_1);

let AUto ={
    Marke:"BMV",
    Model:"5d",
    Kilometerstand:0,
    Ausstaturng:{
        Navigationssystem:true,
        kilmeananlagen:true,
        sitzheizung:true,
        tempormadach:false,
        panoramadach:false,
    },
    zustand:"metal",
    preise:10000

};

AUto.Ps="eeuq";
AUto.Model="etga";

console .log(`Ein ${AUto.Marke} mit ${AUto.Model} hat ${AUto.Ps} aus`);
