async function fun_name(){
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    return data;
}

let variable = fun_name();
variable.then( data => console.log(data))