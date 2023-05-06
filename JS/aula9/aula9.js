var carro = prompt("modelo");
var marca = prompt("marca");
var codigo = prompt("cupon");
var tempo = 1;
var carro_p = parseInt(prompt("1 se sim 0 se nao"));
if (codigo == "2ybh"){
    var des = 0.1;
} 
else if (codigo == "2b33"){
    des = 0.2;
}
else{
    var des = 1; 
};
while(carro_p == 1){
    if (carro_p == 1){
        var tempo = tempo+1;
    }
    else{
        var conta = des * tempo;
        var preco = conta * (tempo * 10); 
    };
    carro_p = parseInt(prompt("1 se sim 0 se nao")); 
};
alert("o carro "+carro+" da marca "+marca+" ficou no estacionamento por "+tempo+"horas é o total a pagar é R$"+preco+" reais");


