"use strict";
let auto_1={
    marke:"BMW",
    model:"iB"
};
let auto_2 ={
    marke:"Tesla",
    modell:"Model X"
};
let auto_3 ={
    marke:"Tesla",
    modell:"Model X"
};


console.log(auto_1==auto_2);
//false
console.log(auto_1==auto_3);
//false
console.log(auto_3==auto_3);
//true
console.log({}=={});
//false

const auto = function(a,b){
 if(a.marke==b.marke && a.model == b.model){
    return true;
 }else{
    return false;
 }

};

console.log(auto(auto_2,auto_3));

