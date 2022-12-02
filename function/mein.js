"use strict";
// const multiplizieren =function(a,b){
//     let x = a+b;
//     return x;

// }

// console.log(multiplizieren(2,3));
//function verstehen
// let vorname ;
// let nachname; 
// let alt=37;
// const test=function(vorname, nachname, alt){
//     console.log(`hallo ich bin ${vorname}${nachname} and ich habe `)
// }

// console.log("Maryam","shabanzadeh",37);

const multiplizieren = function(a,b){
    return a*b;
    console.log("Test");
};
let z_1 =13;
let z_2 =111;
let ergebnis = multiplizieren(z_1,z_2)
    console.log(ergebnis);
let ergebnis_2 = multiplizieren(multiplizieren(z_1,z_2),multiplizieren(z_1,z_2));
console.log(ergebnis_2);