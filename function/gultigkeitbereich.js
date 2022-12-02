//global varaiable: wird außerhalb aller codeblock definiert und ist von überall zugreifen.
//lokal varaiablen: lokal varibale wird innerhalb code block definiert und nur hier zugreifen kann


let variable_1 = "variabale 1";
const meine_function = function(){
    let varaibale_2 = "varabiele_2";
    console.log(variable_1);
    console.log(varaibale_2);
}

meine_function();
console.log(variable_1)