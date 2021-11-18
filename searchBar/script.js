const search = () =>{

    //getting text value
    let filter = document.getElementById('input_txt').value.toUpperCase();
    // accessing the table 
    let table = document.getElementById('table');
    //accessing the tr inside table
    let tr = table.getElementsByTagName('tr');

    for(var i = 0; i < tr.length; i++){
        //accessing the td inside tr
        let td = tr[i].getElementsByTagName('td')[1];
        if(td){
            let txt = td.textContent || td.innerHTML;
            if(txt.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }

    }

}

search();