let personen =[
    "Sebastian",
    "Masel",
    "Anna",
    "Dennis",
    "Maia"
];
personen[1]="Pia";
console.log(personen);
//push(): fügt ein Element am Ende des Array
personen.push("Max");
console.log(personen);

//Pop()Entfernt das letztes Element aus dem Array
personen.pop();
console.log(personen);
//unshift(): fügt element am Anfang des Array
personen.unshift("Maryam");
console.log(personen);
//shift()Entfernt erste Element
personen.shift();
console.log(personen);