var resut = 0
function calculo() {
    var Q1 = document.querySelector("input[name='Q1']:checked").value;
    if(Q1 == "c"){
        resut ++
    };
    var Q2 = document.querySelector("input[name='Q2']:checked").value;
    if(Q2 == "c"){
        resut ++
    };
    var Q3 = document.querySelector("input[name='Q3']:checked").value;
    if(Q3 == "c"){
        resut ++
    };
    var Q4 = document.querySelector("input[name='Q4']:checked").value;
    if(Q4 == "c"){
        resut ++
    };
    var Q5 = document.querySelector("input[name='Q5']:checked").value;
    if(Q5 == "c"){
        resut ++
    };
    var Q6 = document.querySelector("input[name='Q6']:checked").value;
    if(Q6 == "c"){
        resut ++
    };
    var Q7 = document.querySelector("input[name='Q7']:checked").value;
    if(Q7 == "c"){
        resut ++
    };
    var Q8 = document.querySelector("input[name='Q8']:checked").value;
    if(Q8 == "c"){
        resut ++
    };
    var Q9 = document.querySelector("input[name='Q9']:checked").value;
    if(Q9 == "c"){
        resut ++
    };
    var Q10 = document.querySelector("input[name='Q10']:checked").value;
    if(Q10 == "c"){
        resut ++
    };
    if(resut < 5){
        document.getElementById("cx10").style.backgroundColor = "#ff0000";
    };
    if(resut >=5 && resut <= 7){
        document.getElementById("cx10").style.backgroundColor = "#0000ff";
    };
    if(resut >= 8 && resut <= 9 ){
        document.getElementById("cx10").style.backgroundColor = "#9d9b9b";
    };
    if(resut == 10){
        document.getElementById("cx10").style.backgroundImage = "url('para.jpg')"
    };
};
