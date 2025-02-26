let amigos =[];
let amigue = "";

function addAmigo() {
    amigue = document.getElementById("amigo").value;
    if(amigue == ""){
        console.log('por favor, adicione um nome valido á lista');
    } else {
        amigos.push(amigue);
        updateAmigos();
        amigue = "";
    } 

    
}
//updateAmigos irá inserir os nomes dados ao addAmigos no array amigos.
function updateAmigos(){
    let listado = document.querySelector('#listaAmigos');
    listado.innerHTML = null;
    for(i = 0; i < amigos.length; i++){
        listado.innerHTML += `<li> ${amigos[i]}</li>`;
    }
    
}
//sortAmigos irá sortear o amigo secreto dentro dos nomes no array 
function sortAmigo(){
    let sorteado = document.querySelector('#resultado');
    if(amigos == [null]){
        alert("por favor insira um nome!");
    } else{
        let sorteando = Math.floor(Math.random() * amigos.length);
        sorteado.innerHTML = `<p>${amigos[sorteando]}</p>`;
    
    }
}
