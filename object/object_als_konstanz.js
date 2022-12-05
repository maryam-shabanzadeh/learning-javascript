"use strict"
//mit const können wir eigenschaft ändern
const person ={
    vorname:"maryam",
    nachname:"shabanzadeh",
    alter:37


};

const v = "Test";

person.vorname ="Peter";
person.haarefarbe ="brauen";
delete person.haarefarbe;

console.log(person);