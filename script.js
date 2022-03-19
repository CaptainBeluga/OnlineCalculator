function addizione(){
    var primo_input = document.getElementById("primo_input").value;
    var secondo_input = document.getElementById("secondo_input").value;
    var risultato_addizione = parseFloat(primo_input) + parseFloat(secondo_input);

    if(!isNaN(risultato_addizione)){
        document.getElementById("risultato_add").innerHTML = "Risultato = " + risultato_addizione.toFixed(1);
    }
}


function sottrazione(){
    var primo_input = document.getElementById("primo_input_sottr").value;
    var secondo_input = document.getElementById("secondo_input_sottr").value;
    var risultato_addizione = parseFloat(primo_input) - parseFloat(secondo_input);

    if(!isNaN(risultato_addizione)){
        document.getElementById("risultato_sottr").innerHTML = "Risultato = " + risultato_addizione;
    }
}


function moltiplicazione(){
    var primo_input = document.getElementById("primo_input_molt").value;
    var secondo_input = document.getElementById("secondo_input_molt").value;
    var risultato_addizione = parseFloat(primo_input) * parseFloat(secondo_input);

    if(!isNaN(risultato_addizione)){
        document.getElementById("risultato_molt").innerHTML = "Risultato = " + risultato_addizione;
    }
}

function divisione(){
    var primo_input = document.getElementById("primo_input_divisione").value;
    var secondo_input = document.getElementById("secondo_input_divisione").value;
    var risultato_addizione = parseFloat(primo_input) / parseFloat(secondo_input);

    if(!isNaN(risultato_addizione))
        document.getElementById("risultato_divisione").innerHTML = "Risultato = " + risultato_addizione.toFixed(1);
}
