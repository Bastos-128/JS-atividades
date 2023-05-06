function exibir(){
    document.getElementById("corpo").style.backgroundColor = "#ff0000";
    document.getElementById("cx10").style.backgroundImage = "url('js/img/icom.png')";
    document.getElementById("cx10").style.backgroundSize = "cover";
};
function resutado(){
    var p1 = document.querySelector("input[name='p1']:checked").value;
    if(p1 == "c"){
        alert("certo");
    }
    else{
        alert("errado");
    };
};