function Enviar() {
    let text = document.getElementById("consulta").value;
    document.getElementById("rta").innerHTML = "El Dia Esta: " + text;
}
function calcular() {
    let rad = document.getElementById("radio").value;
    let area = Math.PI * rad * rad;
    let perim = 2 * Math.PI * rad;
    document.getElementById("rtaArea").innerHTML = "el Area Es: " + area + " y El perimetro es :" + perim;
    /* document.getElementById("rtaPerim").innerHTML = "El Perimetro es: "  + perim;*/
}
function EsMayor() {
    let age = document.getElementById("edad").value;
    if (age > 18) {
        document.getElementById("rtaEdad").innerHTML = "Es Mayor de Edad";
    } else {
        document.getElementById("rtaEdad").innerHTML = "Es Menor de Edad";
    }
}
function si_no() {
    let res = document.getElementById("resp").value;
    if (res === "S" || res === "N") {
        document.getElementById("rtaSiOno").innerHTML = "Correcto";
    } else {
        document.getElementById("rtaSiOno").innerHTML = "Incorrecto";
    }
}
function operacion() {
    let opcion = parseInt(document.getElementById("opcion").value, 10);
    let num1 = parseFloat(document.getElementById("numA").value);
    let num2 = parseFloat(document.getElementById("numB").value);

    switch (opcion) {
        case 1:
            let totalSum = num1 + num2;
            document.getElementById("rtaOP").innerHTML = "el resultado es: " + totalSum;
            alert(`La suma entre ${num1} y ${num2} equivale a ${num1 + num2}`);
            break;
        case 2:
            let totalRes = num1 - num2;
            document.getElementById("rtaOP").innerHTML = "el resultado es: " + totalRes;
            alert(`La resta entre ${num1} y ${num2} equivale a ${num1 - num2}`);
            break;
        case 3:
            let totalMulti = num1 * num2;
            document.getElementById("rtaOP").innerHTML = "el resultado es: " + totalMulti;
            alert(`La multiplicación entre ${num1} y ${num2} equivale a ${num1 * num2}`);
            break;
        case 4:
            let totalDiv = num1 / num2;
            document.getElementById("rtaOP").innerHTML = "el resultado es: " + totalDiv;
            alert(`La división entre ${num1} y ${num2} equivale a ${num1 / num2}`);
            break;
        default:
            alert('Ciao');
    }
}
function par() {
    let num1 = document.getElementById("numC").value;
    if (num1 % 2 === 0) {
        document.getElementById("rta06").innerHTML = "Es Par";
        alert(`el Numero ${num1} es Par`);
        console.log("El Numero: " + num1 + " es Par");
    } else {
        document.getElementById("rta06").innerHTML = "Es Impar";
        alert(`el Numero ${num1} es Inpar`);
        console.log("El Numero: " + num1 + " es Inpar");
    }
}
function limite() {
    let numlimit = document.getElementById("numD").value;
    let n = document.getElementById("numeros").value;
    var suma = 0;
    do {
        alert(`Ingrese Otro Numero`)
        suma += n;
        alert(suma);
    } while (numlimit >= suma) {
        alert("Supero el limite inicial que era " + numlimit);
    }
}