
"use strict";



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
    aktive:true,
    einzahlen: function(e){
        this.Kontostand +=e;

    },
    
   abheben: function(a){
        this.Kontostand-=a;
    }


};
let thisonto = {
    iban: "DE623458723",
    bic:"WEASEPX",
    inhaber:{
        vorname: "Hanie",

        nachname: "mahsomnia",
        geschlecht: "femels",
        alter: 16
    },
    Kontostand:3500,
    athistive:true,
    einzahlen: function(e){
        this.Kontostand +=e;

    },
    
   abheben: function(a){
        this.Kontostand-=a;
    }
    
};
konto.einzahlen(2000);
console.log(this.Kontostand);
