
//Evento Clique
function eventoClick(){
    alert("Acionou um evento Clique");
    document.body.style.background = "yellow";
}

//Evento Double Click
function eventoDblClick(){
    alert("Evento de Clique Duplo");
}

//Evento de Mouse Over
function vira_vermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

//Evento de Mouse Out
function vira_azul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

//Evento de OnFocus
function limpa_texto(){
    document.getElementById("campoTexto").value = "";
}

//Evento de OnChange
function mudou(){
    console.log("Mudou");
}

//Evento de OnKeyPress
function tecla_pressionada(){
    let input = document.getElementById("campoTexto4").value;
    console.log(input);
}