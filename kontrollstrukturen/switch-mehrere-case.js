"use strict"

let essen = "Steak";
switch(essen){
    case "Nudeln":
    case "Pizza":
    case "Steak":
        console.log("Das mag ich");
        break;
    case "Fisch":
    case "Hammer":
        console.log("Das mag ich nicht");
    default:
        console.log(`Ìch kenne ${essen} nicht, was ist das?`);
        break;

    
}