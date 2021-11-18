// before es6
// let std = {
//     fname:"khalid",
//     age:22,
//     subject:"BSSE",
//     getInfo:function(){
//         console.log(`Your name is ${this.fname} and your age is ${this.age} along
//         subject you had choosen is ${this.subject}`);
//     }
// }
// console.log(std.fname)
// std.getInfo()
// after es6
let std = {
    fname:"khalid",
    age:22,
    subject:"BSSE",
    getInfo:()=>
    {
        return `Your name is ${this.fname} and your age is ${this.age} along
        subject you had choosen is ${this.subject}`;
    }
}
console.log(std.fname)
console.log(std.getInfo())