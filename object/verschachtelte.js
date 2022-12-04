/*
let iban="DE623458723";
let bic="WEASEPX";
let Kontostand=3500;
let aktive=true;
*/
// let inhaber_1 = {
//     vorname:"maryam",
//     nachname:"shabanzadeh",
//     geschlecht:"femels",
//     alter:37


// };

// console.log(inhaber_1);

// let inhaber_2 = {
//     vorname: "Hanie",
//     nachname: "mahsomnia",
//     geschlecht: "femels",
//     alter: 16
// };

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


//console.log(konto_1);
//INhaber-object(vorname, nachname, Geschlechte, Alter)
//object füt ein Auto anlegen:

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
console.log(AUto)