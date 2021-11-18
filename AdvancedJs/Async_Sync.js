// Synchronous JavaScript: As the name suggests synchronous 
// means to be in a sequence, i.e. every statement of the code 
// gets executed one by one. So, basically 
// a statement has to wait for the earlier statement to get executed.

// ^^^^^^^^^^^^^^^^^^^Synchronous JS^^^^^^^^^^^^^^^^^^^^^^^^ 
let fun1 = () =>{
    console.log("function one is called");
    fun2();
    console.log('function one called again back');
}
let fun2 = () =>{
    console.log("function two called");
}
fun1();
//Asynchronous JavaScript: Asynchronous code allows the programto be executed
//immediately where the synchronous code will block further execution 
//of the remaining code until it finishes the current one. 
//This may not look like a big problem but when you see it in a bigger picture you realize 
//that it may lead to delaying the User Interface.


//Asyncronous JS
let fun1 = () =>{
    console.log("function one is called");
    setTimeout(()=>{
        fun2();
    },2000)
    console.log('function one called again back');
}
let fun2 = () =>{
    console.log("function two called");
}
fun1();

// example 2
document.write("Hi");
    document.write("<br>");
  
    setTimeout(() => {
        document.write("Let us see what happens");
    }, 2000);
  
    document.write("<br>");
    document.write("End");
    document.write("<br>");