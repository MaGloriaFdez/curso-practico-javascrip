// Helpers
function isPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado=0,nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

// Calculadora de Medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    let mediana = 0;
    if (isPar(lista.length)){
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
    }else{
        mediana = listaOrdenada[mitad];
    }
    return mediana;
}

// Datos
const salariosCol = colombia.map(function(persona){
    return persona.salary;
});

const salariosColSorted = salariosCol.sort(function(a,b){
    return a - b;
});

// Mediana General
const medianaGeneralCol = medianaSalarios(salariosColSorted);
console.log("Mediana gemeral de salarios: "+medianaGeneralCol+"$");

// Mediana Top 10%
const spliceStart = (salariosColSorted.length * (100 - 10))/100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log("Mediana Top 10 de salarios: "+medianaTop10Col+"$");

console.log(
    {
        medianaGeneralCol,
        medianaTop10Col
    }
);

