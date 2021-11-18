// sum(4)(2)(3)  = ?
// using function curring we will solve this problem
let sum = (num1) =>{
    // console.log(num1);
    return function(num2){
        // console.log(num1,num2);
        return function(num3){
            return num1 + num2 +num3;
        }
    }
}

console.log(sum(4)(3)(4))