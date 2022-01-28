const lista = [
    600,
    200,
    500,
    4000000,
];

function isPar(numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function calcularMediana(lista){
    debugger;
    const mitadLista = lista.length/2;
    const listaOrdenada = lista.sort(function(a,b){
        if (a===b){
            return 0;
        }
        if (a<b){
            return -1;
        }else{
            return 1;
        }
    });
    let mediana = 0;
    if (isPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
    }else{
        const mitadLista1 = parseInt(mitadLista);
        mediana = listaOrdenada[mitadLista1];
    }
    return mediana;
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado=0,nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}


