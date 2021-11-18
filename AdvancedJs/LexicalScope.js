// A lexical scope in JavaScript means that a variable defined outside a function 
// can be accessible inside another function defined after the variable declaration.
// But the opposite is not true; the variables defined inside a function will not be
//  accessible outside that function.
let a = "Hello my name is";
function outerFun(){
    let b = " Khalid mansoor";
    function innerfun()
    {
        let sum = a+b;
        console.log(sum);
    }
    innerfun();
    // console.log(sum); //cannot access the variables inside inner function
}

outerFun();
