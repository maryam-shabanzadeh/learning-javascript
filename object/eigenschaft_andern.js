let auto = {
    marke:"BMW",


};
auto.marke="Tesla";
//eigenschaft hinzufügen

auto.modell="Model 3";
console.log(auto);

auto["farbe"]="rot";

//eigenschaft löschen

delete auto.farbe;

console.log(auto);