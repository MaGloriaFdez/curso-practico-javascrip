// Helpers
function print(element,txt,value){
    const result = document.getElementById(element);
    result.innerText = txt + value;
}
 function calcularPorcentaje(total, value){
    if ((total == null || total == undefined || total == "")){
        return 0;
    }
    return (value == null || value == undefined || value == "") ? 0 : (parseFloat(value)*100)/parseFloat(total);

 }
// Variables globales
var ingresos = 0;
var porcentajesIngresos = {};

// Funciones
function onClickButtonIngresos(){
    const salario = document.getElementById("InputSalario").value; 
    const rentas = document.getElementById("InputRentas").value; 
    const dividendos = document.getElementById("InputDividendos").value; 
    const intereses = document.getElementById("InputIntereses").value; 
    const otros = document.getElementById("InputOtros").value; 
    
    ingresos += (salario == null || salario == undefined || salario == "") ? 0 : parseFloat(salario);
    ingresos += (rentas == null || rentas == undefined || rentas == "") ? 0 : parseFloat(rentas);
    ingresos += (dividendos == null || dividendos == undefined || dividendos == "") ? 0 : parseFloat(dividendos);
    ingresos += (intereses == null || intereses == undefined || intereses == "") ? 0 : parseFloat(intereses);
    ingresos += (otros == null || otros == undefined || otros == "") ? 0 : parseFloat(otros);
    print("ResultI","Ingresos totales: €",ingresos);

    debugger;
    if ((ingresos != 0)){
        var porcentajeSalario = calcularPorcentaje(ingresos,salario);
        setPorcentajesIngresos("Salario",porcentajeSalario);
        var porcentajeRentas = calcularPorcentaje(ingresos,rentas);
        setPorcentajesIngresos("Rentas",porcentajeRentas);
        var porcentajeDividendos = calcularPorcentaje(ingresos,dividendos);
        setPorcentajesIngresos("Dividendos",porcentajeDividendos);
        var porcentajeIntereses = calcularPorcentaje(ingresos,intereses);
        setPorcentajesIngresos("Intereses",porcentajeIntereses);
        var porcentajeOtros = calcularPorcentaje(ingresos,otros);
        setPorcentajesIngresos("Otros",porcentajeOtros);

        var porcentajes =  Object.entries(porcentajesIngresos);
        var analisis = "";
        for (var i=0; i<porcentajes.length; i++){
            analisis += " "+porcentajes[i][0]+" "+parseInt(porcentajes[i][1])+"%";
        } 
        print("ResultIA","Análisis de los ingresos (%):",analisis);

    }
    
}

function setPorcentajesIngresos(key,value){
    if (parseFloat(value) != 0){
        porcentajesIngresos[key]=parseFloat(value);
    }
}
