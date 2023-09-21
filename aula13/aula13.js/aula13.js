function soma(n1, n2) {
    return n1 + n2;
}
function divisao(n1, n2) {
    return n1 / n2;
}
function multiplicacao(n1, n2) {
    return n1 * n2;
}
function subtracao(n1, n2) {
    return n1 - n2;
}

function somar(){
    document.getElementById("resultado").value = soma(Number(document.getElementById("n1").value),
       Number(document.getElementById("n2").value))
}

function  menos(){
    document.getElementById("resultado").value = subtracao(Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value))
}

function vezes(){
    document.getElementById("resultado").value = multiplicacao(Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value))
}

function dividir(){
    document.getElementById("resultado").value = divisao(Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value))
}