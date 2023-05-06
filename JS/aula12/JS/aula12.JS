// function ternario(){
//     var n1 = document.getElementById("cx1").value;
//     // if(n1<=){true}else{false}
//     alert(n1 <= 10?"menor q 10":"Maior q 10";
// }
function mudar (){
    var nome = document.getElementById("cx1").value;
    var matriz = ["daniel","carola"];
    matriz.push(nome);
    alert(matriz.length);
    for(var r=0; r < matriz.length;r++){
        document.write(matriz[r]);
    }
}