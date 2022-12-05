"use strict";

let person ={
    vorname:"Max",
    nachname:"Mustermann",
    alter: 18
};

const person_verarbeiten = function(p){

    let name = `${p.vorname} ${p.nachname}`;
    let zusammenfassung = `${p.vorname} ${p.nachname} Jahre`;
    let begruessung = `Hallo ${p.vorname} ${p.nachname}`;

    let rueckagabe_objekt = {
        n :name,
        z: zusammenfassung,
        b: begruessung
    };
    return rueckagabe_objekt;
};
console.log(person_verarbeiten(person));
