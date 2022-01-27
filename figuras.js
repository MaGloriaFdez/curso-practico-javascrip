// Código del Cuadrado
console.group("Cuadrados");
function perimetroCuradrado(lado){
    return lado * 4;
}
console.log("El perímetro de un cuadrado de lado 4cm es: " + perimetroCuradrado(4) + "cm");

function areaCuradrado(lado) {
    return lado * lado;
}
console.log("El área de un cuadrado de lado 4 cmes: " + areaCuradrado(4) + "cm^2");
console.groupEnd();

// Código del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
console.log("El perímetro de un triangulo de lados 6cm, 6cm y base 4cm es : " + perimetroTriangulo(6,6,4) + "cm");

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}
console.log("El área de un triangulo de base 4cm y altura 5.5cm es : " + areaTriangulo(4,5.5) + "cm^2");

console.groupEnd();

// Código del Círculo
console.group("Círculos");

function diametroCirculo(radio){
    return  radio * 2;
}
console.log("El diametro de un circulo de radio 4cm es : " + diametroCirculo(4) + "cm");

const PI = Math.PI;
console.log("PI es : " + PI);

function perimetroCirculo(radio){
    return radio * 2;
} 
console.log("El perímetro de un circulo de radio 4cm es : " + perimetroCirculo(4) + "cm");

function areaCirculo(radio){
    return diametroCirculo(radio) * PI;
}
console.log("El área de un circulo de radio 4cm es " + areaCirculo(4) + "cm^2");

console.groupEnd();

// Calculos con datos de HTML
// Cuadrado
function calcularPerimetroCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let perimetro = perimetroCuradrado(value);
    alert("El perímetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let area = areaCuradrado(value);
    alert("El área del cuadrado es: " + area);
}

// Triangulo
function calcularPerimetroTriangulo(){
    let inputL1 = document.getElementById("inputLado1Triangulo");
    let inputL2 = document.getElementById("inputLado2Triangulo");
    let lado1 = inputL1.value;
    let lado2 = inputL2.value;
    let inputB = document.getElementById("inputBaseTriangulo");
    let base = inputB.value;

    let perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perímetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    let inputB = document.getElementById("inputBaseTriangulo");
    let base = inputB.value;
    let inputA = document.getElementById("inputAlturaTriangulo");
    let altura = inputA.value;

    let area = areaTriangulo(base, altura);
    alert("El área del triangulo es: " + area);
}

// Círculo
function calcularPerimetroCirculo(){
    let input = document.getElementById("inputRadioCirculo");
    let radio = input.value;

    let perimetro = perimetroCirculo(radio);
    alert("El perímetro del círculoo es: " + perimetro);
}

function calcularAreaCirculo(){
    let input = document.getElementById("inputRadioCirculo");
    let radio = input.value;

    let area = areaCirculo(radio);
    alert("El área del círculo es: " + area);
}

// Triangulo isoceles (por lo menos dos lados iguales)
function calcularAlturaIsoceles(){
    let input1 = document.getElementById("inputlado1Isiceles");
    let lado1 = input1.value;
    let input2 = document.getElementById("inputlado2Isiceles");
    let lado2 = input2.value;
    let input3 = document.getElementById("inputlado3Isiceles");
    let lado3 = input3.value;
    let isoceles = false;
    if (lado1===lado2 || lado1===lado3 || lado3===lado2){
        isoceles=true;
    }
    if (!isIsoceles(lado1,lado2,lado3)){
        return false;
    }
    let lado = 0;
    let base = 0;
    if (lado1===lado2 && lado1!=lado3){
        lado = lado1;
        base = lado3;
    }
    if (lado1===lado3 && lado1!=lado2){
        lado = lado1;
        base = lado2;
    }
    if (lado2===lado3  && lado2!=lado1) {
        lado = lado2;
        base = lado1;
    }
    if (lado1===lado2  && lado2===lado3) {
        lado = lado1;
        base = lado3;
    }

    let calc1 = lado * lado; 
    let calc2 = base * base;
    let calc3 = calc2/4;
    let altura = Math.sqrt(calc1 - calc3);
    
    alert("La altura del triangulo es: "+altura+"cm");

}
function isIsoceles(lado1, lado2, lado3){
    if (lado1===lado2 || lado1===lado3 || lado3===lado2){
        return true;
    }else
    alert ("El triangulo NO es isoceles, no se hace el cálculo!");
    return false;

}