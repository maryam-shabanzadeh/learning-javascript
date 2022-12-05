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


// werte setzen

//werte setzen bzw. verändern(Notation-Notation)
let werte_1 = konto_1["iban"];
let werte_2 = konto_2["inhaber"]["geschlecht"];
console.log(werte_2);
//Werte setzen . verändern(brckert-Notation)

konto_1["Kontostand"]=3000;
console.log(konto_1);
//warum wir die Bracket-Notation jemals verwenden?
let eigenschaft = "iban";
let werte_3 = konto_1[eigenschaft];
console.log(werte_3);
//Eigenscha

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

AUto["Model"]="zhd3";
AUto["ps"]=1234;
let eig = "ps";
console.log(`Ein ${AUto["Model"]} hat ${AUto["ps"]}`);