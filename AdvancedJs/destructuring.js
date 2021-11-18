// Destructuring is a JavaScript expression that makes it possible 
// to unpack values from arrays, or properties from objects,
// into distinct variables. That is, we can extract data from arrays
// and objects and assign them to variables. ...
// The ES6 destucturing assignment makes it easier to extract this data.



// let student = ["khalid","BSSE","CGPA","Mihral",22]
// // rude method before es6 
// // let name = student[0];
// // let subject = student[1];
// //after es6 array destructuring is
// let [name,subject,gpa,friend,age,degree="BS Software"] = student;
// console.log(degree);

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^?
// OBJECT DESTRUCTURING

let student = ["khalid","BSSE","CGPA","Mihral",22]
// rude method before es6 
// let name = student[0];
// let subject = student[1];
//after es6 array destructuring is
let {name,subject,gpa,friend,age,degree="BS Software"} = student;

console.log(degree);