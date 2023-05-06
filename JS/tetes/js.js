function resutado(){
var cas01 = document.getElementById("espaco01").value;
var cas02 = document.getElementById("espaco02").value;
var cas03 = document.getElementById("espaco03").value;
var cas04 = document.getElementById("espaco04").value;
var cas05 = document.getElementById("espaco05").value;
var cas06 = document.getElementById("espaco06").value;
var cas07 = document.getElementById("espaco07").value;
var cas08 = document.getElementById("espaco08").value;
var cas09 = document.getElementById("espaco09").value;

if((cas01 == "x" && cas02 == "x" && cas03 == "x")||
(cas04 == "x" && cas05 == "x" && cas06 == "x")||
(cas07 == "x" && cas08 == "x" && cas09 == "x")||
(cas01 == "x" && cas04 == "x" && cas07 == "x")||
(cas02 == "x" && cas05 == "x" && cas08 == "x")||
(cas03 == "x" && cas06 == "x" && cas09 == "x")||
(cas01 == "x" && cas05 == "x" && cas09 == "x")||
(cas03 == "x" && cas05 == "x" && cas07 == "x")){
   alert("X Ganhou");
}
if((cas01 == "o" && cas02 == "o" && cas03 == "o")||
(cas04 == "o" && cas05 == "o" && cas06 == "o")||
(cas07 == "o" && cas08 == "o" && cas09 == "o")||
(cas01 == "o" && cas04 == "o" && cas07 == "o")||
(cas02 == "o" && cas05 == "o" && cas08 == "o")||
(cas03 == "o" && cas06 == "o" && cas09 == "o")||
(cas01 == "o" && cas05 == "o" && cas09 == "o")||
(cas03 == "o" && cas05 == "o" && cas07 == "o")){
    alert("O ganhou");
}
if(cas01 && cas02 && cas03 && cas04 && cas05 && cas06 && cas07 && cas08 && cas09){
 alert("empate")
} 
};