function calculadora(){
    let resultado = 0.0;
    let operando1;
    let operando2;
    let operador;

    operando1 = parseFloat( prompt("digite o primeiro número: "));
    operando2 = parseFloat(prompt("digite o segundo número: ") );
    operdador = prompt("digite uma das operações (+ - * /): ");

    if (operador === "+"){
        resultado = operando1 + operando2;
    }else if (operador === "_"){
        resultado = operando1 - operando2;
    }else if (operador === "*"){
        resultado = operando1 * operando2
    }else if (operador === "/"){
        resultado = operando1 / operando2
    }else{
        alert("Operador inválido!");
        return 
    }
    alert("resultado: " + 
        operando1 + " " + operador + " " + operdor2 + "=" + resultado);

}