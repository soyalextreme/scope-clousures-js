// 3 - Jan - 2022
// Alejandro Andrade


// global scope 
var hello = "Hello";
var hello = "Hello +"
let world = "world";
// let world = "world +" Error this can not be redeclare only reasign
const helloWorld = `${hello} ${world}!!`;


// function to show the global variables
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}


anotherFunction();


const helloWorldFun = () => {
    // bad practice, this creates a global varible
    globalVar = "Im global"
}


helloWorldFun();
console.log(globalVar);


const anotherFunctionRandom = () => {
    // other bad practice
    var localVar = globalVar = "Im Global";
    globalVar = "Changing local var";
    console.log(localVar);
}


anotherFunctionRandom();
console.log(globalVar);