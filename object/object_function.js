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

const kontostand_ausgeben=function(konto){
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} auf dem konto`)

}

console.log(kontostand_ausgeben(konto_1));
console.log(kontostand_ausgeben(konto_2));