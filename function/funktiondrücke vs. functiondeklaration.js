// functionausdruck: mit const kann man überschreiben, sicher geschrieben, 

const function_1 = function(){
    console.log("function 1");
};
function_1();

let function_2 = function(){
    console.log("function 2");
};
function_2();

function_2=function(){
    console.log("function 2(new");
};

function_2();
// functiondeklartion: (werden gehoistert)

function function_3(){
    console.log("function 3");
}

function_3();