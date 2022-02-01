// Helpers
function print(element,txt,value, aditionalTxt){
    const result = document.getElementById(element);
    result.innerText = txt;
    if (value != 0){
        result.innerText += value;
    }
    if (aditionalTxt != null && aditionalTxt != undefined){
        result.innerText += aditionalTxt;
    }
    
}
 function calcularPorcentaje(total, value){
    if ((total == null || total == undefined || total == "")){
        return 0;
    }
    return (value == null || value == undefined || value == "") ? 0 : (parseFloat(value)*100)/parseFloat(total);

 }

 // Funciones de análisis
 function setPorcentajesIngresos(key,value){
    if (parseFloat(value) != 0){
        porcentajesIngresos[key]=parseFloat(value).toFixed(2);
    }
}

function setPorcentajesGastos(key,value){
    if (parseFloat(value) != 0){
        porcentajesGastos[key]=parseFloat(value).toFixed(2);
    }
}

function setPorcentajesActivos(key,value){
    if (parseFloat(value) != 0){
        porcentajesActivos[key]=parseFloat(value).toFixed(2);
    }
}

function setPorcentajesPasivos(key,value){
    if (parseFloat(value) != 0){
        porcentajesPasivos[key]=parseFloat(value).toFixed(2);
    }
}

function analisisPorcentajes(objPorcentajes,elementToPrint,msgToprint){
    var porcentajes =  Object.entries(objPorcentajes);
    var analisis = "";
    for (var i=0; i<porcentajes.length; i++){
        analisis += " "+porcentajes[i][0]+" "+parseFloat(porcentajes[i][1]).toFixed(2)+"%";
    } 
    print(elementToPrint,msgToprint,analisis);

}

function top3(objPorcentajes,elementToPrint,msgToprint){
    const pordentajesSort = Object.entries(objPorcentajes).sort(function(a,b){
        return b[1]-a[1];
    });
    const max = pordentajesSort.length>=3?3:pordentajesSort.length;

    analisis = "";
    for (var i=0; i<max; i++){
        analisis += " "+pordentajesSort[i][0]+" "+parseFloat(pordentajesSort[i][1]).toFixed(2)+"%";
    } 
    //print("ResultITop3","Top 3 de los ingresos: ",analisis);
    print(elementToPrint,msgToprint,analisis);

}
