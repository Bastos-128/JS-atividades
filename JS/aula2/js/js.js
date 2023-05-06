alert("calculadora java");
    var op = parseInt(prompt("escolha 1 = + 2 = - 3 = * 4 = /"));

        if(op == 1)
    {alert("calculadora soma");
        var s1 = parseInt(prompt("primeiro digito"));
        var s2 = parseInt(prompt("segundo digito"));
        var sr = s1 + s2;
            alert("o resutado é: ");
                document.write(sr);
        };
        if(op == 2)
    {alert("calculadora subitraçao");
        var sb1 = parseFloat(prompt("primeiro digito"));
        var sb2 = parseFloat(prompt("segundo digito"));
        var sbr = sb1 - sb2;
            alert("o resutado é:");
                document.write(sbr);
        };
        if(op == 3)
    {alert("calculadora mutiplicasão");
        var m1 = parseInt(prompt("primeiro digito"));
        var m2 = parseInt(prompt("segundo digito"));
        var mr = m1 * m2;
            alert("o resutado é");
                document.write(mr);
        };
        if(op == 4)
    {alert("calculadora divisao");
        var d1 = parseFloat(prompt("primeiro digito"));
        var d2 = parseFloat(prompt("segundo digito"));
        var dr = d1 / d2;
            alert("o resutado é");
                document.write(dr); 
        };
        if(op >= 5)
    {alert("este numero nao e suportado, por favor precione F5");   
        };
