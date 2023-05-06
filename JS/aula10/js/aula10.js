var senha = "alfa";
alert("entre com a senha");
var senha_com = prompt("");
var add = 1
if (senha == "admin"){
    senha = prompt("digite nova senha");
    add = 1;
};
while(add == 1){
if(senha == senha_com){
    alert("senha correta, asseso permitido");
    add = 0;
}
else{
    alert("senha incoreta, asseso negado");
    add = 0;
};
};
