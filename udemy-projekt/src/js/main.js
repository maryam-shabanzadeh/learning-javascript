"use strict";

const haushalt ={
    gesamtbilanz:{
        einnahmen:0,
        ausgaben:0,
        bilanz:0
    },
    neuer_eintrag:{
        titel:null,
        type:null,
        betrag:null,
        datum:null
    },

    eintrag_erfassen(){
        {
            this.neuer_eintrag.titel = prompt("Titel: ");
            this.neuer_eintrag.type = prompt("Type(Einnahme oder ausgaben): ");
            this.neuer_eintrag.betrag = parseInt(prompt("Betrag (in cent): "));
            this.neuer_eintrag.datum = prompt("Datum(jjj-mm-tt)");
        }
    },

    eintrag_ausgaben(){
            console.log(`Titel: ${this.neuer_eintrag.titel}
Type: ${this.neuer_eintrag.type}
Betrag: ${this.neuer_eintrag.betrag} ct
Datum: ${this.neuer_eintrag.datum} `);
    },
    eintag_mit_gesamtbilanz(){
        switch(this.neuer_eintrag.type){
            case "Einnahme":
                this.gesamtbilanz.einnahmen+=this.gesamtbilanz.betrag;
                this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
                break;
            case "Ausgabe":
                this.gesamtbilanz.ausgaben+=this.neuer_eintrag.betrag;
                this.gesamtbilanz.bilanz -=this.neuer_eintrag.betrag;
                break;
            default:
                console.log(`Der Type"${this.neuer_eintrag.type} ist nicht bekannt`);
            

        }
    },

//     eintag_mit_gesamtbilanz(){
//         if (this.neuer_eintrag.type == "Einnahme"){
//             this.gesamtbilanz.einnahmen+=this.gesamtbilanz.betrag;
//             this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
//         }
//         else{
//             this.gesamtbilanz.ausgaben+=this.neuer_eintrag.betrag;
//             this.gesamtbilanz.bilanz -=this.neuer_eintrag.betrag;
//         } 
// },


ausgeben_gesamtbilanz() { 
    
   
    console.log(
        `Einnahmen: ${this.gesamtbilanz.einnahmen} ct
        Ausgaben: ${this.gesamtbilanz.ausgaben} ct
        Bilanz ist positive: ${this.gesamtbilanz.bilanz>=0}`
    
    );
    
},
eintrag_hinzufuegen(){
    this.eintrag_erfassen();
    this.eintrag_ausgaben();
    this.eintag_mit_gesamtbilanz();
    this.ausgeben_gesamtbilanz();
}

};

haushalt.eintrag_hinzufuegen();
haushalt.eintrag_hinzufuegen();
haushalt.eintrag_hinzufuegen();




// // console.log(`
// // Titel: ${titel_2}
// // Type: ${type_2}
// // Betrag: ${betrag_2}
// // Datum: ${datum_2}`);

// if (betrag_2== "Einnahme"){
//     einnahmen+=type_2;
// }
// else{
//     ausgaben+=type_2;
// }





