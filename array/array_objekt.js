"use strict";

// let auto_1 = {
//     marke: "Hyundai",
//     modell:"i30N",
//     farbe:"rot"
// };

// let auto_2 = {
//     marke:"Ford",
//     modell :"Fiesta ST",
//     farbe:"schwrz"

// };

// let auto_3 ={
//     marke:"VW",
//     modell:"Golf GTI",
//     farbe:"blau"
// };
// let auto =[
//     auto_1,
//     auto_2,
//     auto_3

// ];


let auto=[
  {
    marke:"Hyundaia",
    modell:"i30 N",
    farbe: "rot"

  },
  {
    marke:"Ford",
    modell:"Fiesta ST",
    farbe: "schwarz"
  },
  {
    marke:"VW",
    modell:"Golf GTI",
    farbe: "blau"
  }
]
console.log(auto[1]["marke"]);
console.log(auto[2].farbe);


//array in objekt zu schreiben
let waren1 ={
    obst : ["Apfel", "Birnen", "Bananen"],
    gemuse:["Möhren", "Sellerie", "Kohl"],
    brot:["Graubrot", "Schwarzbrot", "Vollkornbrot"]
};


console.log(waren1.obst[0]);
console.log(waren1.gemuse);