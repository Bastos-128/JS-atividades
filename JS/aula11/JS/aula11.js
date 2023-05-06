var cas01 = document.getElementById("casa01").value;
var cas02 = document.getElementById("casa02").value;
var cas03 = document.getElementById("casa03").value;
var cas04 = document.getElementById("casa04").value;
var cas05 = document.getElementById("casa05").value;
var cas06 = document.getElementById("casa06").value;
var cas07 = document.getElementById("casa07").value;
var cas08 = document.getElementById("casa08").value;
var cas09 = document.getElementById("casa09").value;
var jogg = 3

function pai1(id){
    registro(id)
    resutado()
}
function jogador1(){
    jogg = 1
}
function jogador2(){
    jogg = 2
}
// function registro(){
//     alert(jogg);
// };
function registro(id){
    // determina qual variável cas deve ser atualizada
    switch(id) {
        case "casa1":
            cas01 = jogg;
            if(cas01 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas01 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa2":
            cas02 = jogg;
            if(cas02 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas02 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa3":
            cas03 = jogg;
            if(cas03 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas03 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa4":
            cas04 = jogg;
            if(cas04 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas04 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa5":
            cas05 = jogg;
            if(cas05 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas05 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa6":
            cas06 = jogg;
            if(cas06 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas06 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa7":
            cas07 = jogg
            if(cas01 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas07 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa8":
            cas08 = jogg;
            if(cas08 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas08 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
        case "casa9":
            cas09 = jogg;
            if(cas09 == 1){
                document.getElementById(id).style.backgroundColor="rgb(0,255,255)";
            }
            if(cas09 == 2){
                document.getElementById(id).style.backgroundColor="rgb(220,20,60)"    
            }
            break;
    }
    //alert(jogg);
}
// modifica os botões com a classe bloco-jogo para passar o id como argumento para a função registro
var botoes = document.getElementsByClassName("bloco-jogo");
for (var i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        registro(this.id);
    }
}
// function teste(){
//     alert( cas01+" "+cas02+" "+cas03 );
//     for(var r=0; r < botoes.length;r++){
//         document.write(botoes[r]);
// }
// }
function resutado(){
    if((cas01 == 1 && cas02 == 1 && cas03 == 1)||
    (cas04 == 1 && cas05 == 1 && cas06 == 1)||
    (cas07 == 1 && cas08 == 1 && cas09 == 1)||
    (cas01 == 1 && cas04 == 1 && cas07 == 1)||
    (cas02 == 1 && cas05 == 1 && cas08 == 1)||
    (cas03 == 1 && cas06 == 1 && cas09 == 1)||
    (cas01 == 1 && cas05 == 1 && cas09 == 1)||
    (cas03 == 1 && cas05 == 1 && cas07 == 1)){
       alert("ciano Ganhou");
    }
    if((cas01 == "2" && cas02 == "2" && cas03 == "2")||
    (cas04 == "2" && cas05 == "2" && cas06 == "2")||
    (cas07 == "2" && cas08 == "2" && cas09 == "2")||
    (cas01 == "2" && cas04 == "2" && cas07 == "2")||
    (cas02 == "2" && cas05 == "2" && cas08 == "2")||
    (cas03 == "2" && cas06 == "2" && cas09 == "2")||
    (cas01 == "2" && cas05 == "2" && cas09 == "2")||
    (cas03 == "2" && cas05 == "2" && cas07 == "2")){
        alert("carmezim ganhou");
    }
    if(cas01 && cas02 && cas03 && cas04 && cas05 && cas06 && cas07 && cas08 && cas09){
        alert("empate")
     } 
}







