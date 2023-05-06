function pesquisa(){
    var frutas = document.getElementById("cxpesquisa").value;
    var frutaria = [
        ['texto1','f1.webp'],
        ['texto2','f2.webp'],
        ['texto3','f3.webp'],
        ['texto4','f4.webp'],
        ['texto5','f5.webp']
    ];
    if(frutas == "Abacaxi")
    {document.write(frutaria[0][0]+"<br/>");
    document.write("<img src='img/"+frutaria[0][1]+"'/>");}
    else if(frutas == "Melao")
    {document.write(frutaria[1][0]+"<br/>");
    document.write("<img src='img/"+frutaria[1][1]+"'/>");}
    else if(frutas == "Tomate")
    {document.write(frutaria[2][0]+"<br/>");
    document.write("<img src='img/"+frutaria[2][1]+"'/>");}
    else if(frutas == "Goiaba")
    {document.write(frutaria[3][0]+"<br/>");
    document.write("<img src='img/"+frutaria[3][1]+"'/>");}
    else if(frutas == "Uva")
    {document.write(frutaria[4][0]+"<br/>");
    document.write("<img src='img/"+frutaria[4][1]+"'/>");}
};