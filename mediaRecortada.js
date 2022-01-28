const lista = [
    2000000,
    1,
    8,
    4,
    2,
    6,
    9,
    1,
    3,
    4,
    2,
    10,
    1000,
];

let listaOrdenada;
function calcularMediaR(lista, n){
    // ordenar la lista
    // eliminar n elementos al inicio y al final
    // con los datos restantes hacer la media aritmética
    if (n<0 || n > lista.length/2)
    return mediaR
    
    let mediaR = 0;
    listaOrdenada = lista.sort(function(a,b){
        return a-b;
    });

    for (let i=0; i<n; i++){
        listaOrdenada.shift();
    }
    for (let i=0; i<n; i++){
        listaOrdenada.pop();
    }
   
    if (listaOrdenada.length>0){
        const sumaLista = listaOrdenada.reduce(function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        });
        mediaR = sumaLista/listaOrdenada.length;
        }
    return mediaR;
}
