let meine_variable = "Ruben";
let mein_object = {
    zahl :5000
};
const meine_function = function(v,o){
    v= "Dennis";
    o.zahl = 25000;
}
meine_function(meine_variable,mein_object);


console.log(meine_variable);
console.log(mein_object.zahl);

//call-by-value(gilt für primitive Datentypes)(string, Number, Boolean).
//call-by-referenz gilt für komplexere Datentypen(objekt,function,array).

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

const einzahlung = function (konto,e){
    konto.Kontostand +=e;

}
einzahlung(konto,500);
console.log(konto_1.Kontostand)

const auszahlen=function(konto,e){
    konto.Kontostand -= e;

}

console.log(auszahlen(konto_2.Kontostand));