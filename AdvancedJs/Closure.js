// a closure gives you access to an outer function's scope from an inner function.
// A closure is a function having access to the parent scope,
//  even after the parent function has closed.
// Let's note the first part of the sentence before the comma:

// ...a function having access to the parent scope
// That's describing lexical scope!

// But we need the second part of the definition to give an example of a closure...

// ...even after the parent function has closed.

// example 1
const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
console.log(result);
// result();
// result();
// result();
// example 2
let rectangle = (height,width) =>{
    return {
        getarea(){
            return height*width;
        },
        getparameter(){
            return 2 * (height+width);
        }
    }
}
let s1 = rectangle(6,3);
console.log(s1.getarea());
console.log(s1.getparameter())

let add = (a) =>{
    let b = 10;
    let val=()=>{
        return a+b;
    }
    return val()
}
console.log(add(10))
