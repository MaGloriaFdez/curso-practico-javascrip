// Variables globales
var ingresos = 0;
var porcentajesIngresos = {};
var gastos = 0;
var porcentajesGastos = {};
var capacidadAhorro = 0;
var activos = 0;
var porcentajesActivos = {};
var pasivos = 0;
var porcentajesPasivos = {};

// Funciones
function onClickButtonIngresos(){
    const salario = document.getElementById("InputSalario").value; 
    const rentas = document.getElementById("InputRentas").value;  
    const dividendos = document.getElementById("InputDividendos").value; 
    const intereses = document.getElementById("InputIntereses").value; 
    const otros = document.getElementById("InputOtros").value; 
    
    ingresos = (salario == null || salario == undefined || salario == "") ? 0 : parseFloat(salario);
    ingresos += (rentas == null || rentas == undefined || rentas == "") ? 0 : parseFloat(rentas);
    ingresos += (dividendos == null || dividendos == undefined || dividendos == "") ? 0 : parseFloat(dividendos);
    ingresos += (intereses == null || intereses == undefined || intereses == "") ? 0 : parseFloat(intereses);
    ingresos += (otros == null || otros == undefined || otros == "") ? 0 : parseFloat(otros);
    print("ResultI","Ingresos totales: €",parseFloat(ingresos).toFixed(2));

    if ((ingresos != 0)){
        setPorcentajesIngresos("Salario",calcularPorcentaje(ingresos,salario));
        setPorcentajesIngresos("Rentas",calcularPorcentaje(ingresos,rentas));
        setPorcentajesIngresos("Dividendos",calcularPorcentaje(ingresos,dividendos));
        setPorcentajesIngresos("Intereses",calcularPorcentaje(ingresos,intereses));
        setPorcentajesIngresos("Otros",calcularPorcentaje(ingresos,otros));

        // Análisis de porcentajes
        analisisPorcentajes(porcentajesIngresos,"ResultIA","Análisis de los ingresos (%):");

        // Top 3
        top3(porcentajesIngresos,"ResultITop3","Top 3 de los ingresos: ");

    }
    
}

function onClickButtonGastos(){
    const hipoteca = document.getElementById("InputHipoteca").value; 
    const servicios = document.getElementById("InputServicios").value; 
    const prestamos = document.getElementById("InputPrestamos").value; 
    const tarjetas = document.getElementById("InputTarjetas").value;  
    const alimentacion = document.getElementById("InputAlimentacion").value;  
    const seguros = document.getElementById("InputSeguros").value; 
    const educacion = document.getElementById("InputEducacion").value; 
    const deporte = document.getElementById("InputDeporte").value;  
    const impuestos = document.getElementById("InputImpuestos").value;  
    const otrosG =    document.getElementById("InputGOtros").value;  
    
    debugger;
    gastos = (hipoteca == null || hipoteca == undefined || hipoteca == "") ? 0 : parseFloat(hipoteca);
    gastos += (servicios == null || servicios == undefined || servicios == "") ? 0 : parseFloat(servicios);
    gastos += (prestamos == null || prestamos == undefined || prestamos == "") ? 0 : parseFloat(prestamos);
    gastos += (tarjetas == null || tarjetas == undefined || tarjetas == "") ? 0 : parseFloat(tarjetas);
    gastos += (alimentacion == null || alimentacion == undefined || alimentacion == "") ? 0 : parseFloat(alimentacion);
    gastos += (seguros == null || seguros == undefined || seguros == "") ? 0 : parseFloat(seguros);
    gastos += (educacion == null || educacion == undefined || educacion == "") ? 0 : parseFloat(educacion);
    gastos += (deporte == null || deporte == undefined || deporte == "") ? 0 : parseFloat(deporte);
    gastos += (impuestos == null || impuestos == undefined || impuestos == "") ? 0 : parseFloat(impuestos);
    gastos += (otrosG == null || otrosG == undefined || otrosG == "") ? 0 : parseFloat(otrosG);
    print("ResultG","Gastos totales: €",parseFloat(gastos).toFixed(2));

    if ((gastos != 0)){
        setPorcentajesGastos("Hipotéca",calcularPorcentaje(gastos,hipoteca));
        setPorcentajesGastos("Servicios",calcularPorcentaje(gastos,servicios));
        setPorcentajesGastos("Prestamos",calcularPorcentaje(gastos,prestamos));
        setPorcentajesGastos("Tarjetas",calcularPorcentaje(gastos,tarjetas));
        setPorcentajesGastos("Alimentación",calcularPorcentaje(gastos,alimentacion));
        setPorcentajesGastos("Seguros",calcularPorcentaje(gastos,seguros));
        setPorcentajesGastos("Educación",calcularPorcentaje(gastos,educacion));
        setPorcentajesGastos("Deporte",calcularPorcentaje(gastos,deporte));
        setPorcentajesGastos("Impuestos",calcularPorcentaje(gastos,impuestos));
        setPorcentajesGastos("Otros",calcularPorcentaje(gastos,otrosG));

        // Análisis de porcentajes
        analisisPorcentajes(porcentajesGastos,"ResultGA","Análisis de los gastos (%):");

        // Top 3
        top3(porcentajesGastos,"ResultGTop3","Top 3 de los gastos: ");
    }
}

function onClickButtonIngresosGastos(){
    onClickButtonIngresos();
    onClickButtonGastos();

    capacidadAhorro = ingresos - gastos;
    print("ResultIG","Capacidad de ahorro: €",parseFloat(capacidadAhorro).toFixed(2));
    if (capacidadAhorro <0){
        print("ResultIGA","NO dispones de capacidad de ahorro, debes tomar medidas para mejorar tu situación financiera.",0);
    }else{
        const porcentajeDeAhorro = parseFloat((capacidadAhorro / ingresos) * 100).toFixed(2);
        const ahorroIdeal = (ingresos * 0.20);
        const inversion = porcentajeDeAhorro - 20;
        const msg1 = "Tu tasa de ahorro es del: ";
        var msg2 ="%.";
        if (porcentajeDeAhorro == 20){
            msg2 += " Tu ahorro es la ideal (20% de los ingresos).";
        }else{ 
            print("ResultIG1","Tu ahorro ideal es de:"," "+parseFloat(ahorroIdeal).toFixed(2));
            if (porcentajeDeAhorro < 20){
                msg2 += " Tus posibilidades de ahorro están por debajo del porcentaje ideal (20% de los ingresos), debes plantearte lograr más ingresos o reducir gastos para lograr la menos el 20% de ahorro.";
            }
            if (porcentajeDeAhorro > 20){
                msg2 += " Tu ahorro está por encima de % ideal (20% de los ingresos), puedes plantearte hacer alguna inversión nueva de hasta el "+parseInt(inversion)+"% de los ingresos.";
            } 
        }
        print("ResultIGA",msg1," "+parseInt(porcentajeDeAhorro),msg2);
    }
}

function onClickButtonActivos(){
    const diferidos = document.getElementById("InputDiferidos").value; 
    const cuentas = document.getElementById("InputCuentas").value; 
    const acciones = document.getElementById("InputAcciones").value; 
    const depositos = document.getElementById("InputDepositos").value; 
    const criptos = document.getElementById("InputCriptos").value; 
    const vehiculos = document.getElementById("InputVehiculos").value; 
    const joyas = document.getElementById("InputJoyas").value; 
    const enseres = document.getElementById("InputEnseres").value; 
    const inmuebles = document.getElementById("InputInmuebles").value;
    const otrosA =    document.getElementById("InputAOtros").value; 
    
    activos = (diferidos == null || diferidos == undefined || diferidos == "") ? 0 : parseFloat(diferidos);
    activos += (cuentas == null || cuentas == undefined || cuentas == "") ? 0 : parseFloat(cuentas);
    activos += (acciones == null || acciones == undefined || acciones == "") ? 0 : parseFloat(acciones);
    activos += (depositos == null || depositos == undefined || depositos == "") ? 0 : parseFloat(depositos);
    activos += (criptos == null || criptos == undefined || criptos == "") ? 0 : parseFloat(criptos);
    activos += (vehiculos == null || vehiculos == undefined || vehiculos == "") ? 0 : parseFloat(vehiculos);
    activos += (joyas == null || joyas == undefined || joyas == "") ? 0 : parseFloat(joyas);
    activos += (enseres == null || enseres == undefined || enseres == "") ? 0 : parseFloat(enseres);
    activos += (inmuebles == null || inmuebles == undefined || inmuebles == "") ? 0 : parseFloat(inmuebles);
    activos += (otrosA == null || otrosA == undefined || otrosA == "") ? 0 : parseFloat(otrosA);
    print("ResultA","Total de activos: €",parseFloat(activos).toFixed(2));

    if ((activos != 0)){
        setPorcentajesActivos("Activos diferidos",calcularPorcentaje(activos,diferidos));
        setPorcentajesActivos("Cuentas bancarias",calcularPorcentaje(activos,cuentas));
        setPorcentajesActivos("Acciones",calcularPorcentaje(activos,acciones));
        setPorcentajesActivos("Depósitos bancarios",calcularPorcentaje(activos,depositos));
        setPorcentajesActivos("Criptomonedas y afines",calcularPorcentaje(activos,criptos));
        setPorcentajesActivos("Vehículos",calcularPorcentaje(activos,vehiculos));
        setPorcentajesActivos("Joyas",calcularPorcentaje(activos,joyas));
        setPorcentajesActivos("Enseres",calcularPorcentaje(activos,enseres));
        setPorcentajesActivos("Inmuebles",calcularPorcentaje(activos,inmuebles));
        setPorcentajesActivos("Otros",calcularPorcentaje(activos,otrosA));

        // Análisis de porcentajes
        analisisPorcentajes(porcentajesActivos,"ResultAA","Análisis de los activos (%):");

        // Top 3
        top3(porcentajesActivos,"ResultATop3","Top 3 de los activos: ");
    }
}


function onClickButtonPasivos(){
    const hipotecas = document.getElementById("InputHipotecas").value; 
    const prestamosVeh = document.getElementById("InputPrestamosVeh").value; 
    const prestamos = document.getElementById("InputPrestamosPer").value; 
    const tarjetas = document.getElementById("InputTarjetasCre").value; 
    const otrosP =    document.getElementById("InputPOtros").value; 
    
    pasivos = (hipotecas == null || hipotecas == undefined || hipotecas == "") ? 0 : parseFloat(hipotecas);
    pasivos += (prestamosVeh == null || prestamosVeh == undefined || prestamosVeh == "") ? 0 : parseFloat(prestamosVeh);
    pasivos += (prestamos == null || prestamos == undefined || prestamos == "") ? 0 : parseFloat(prestamos);
    pasivos += (tarjetas == null || tarjetas == undefined || tarjetas == "") ? 0 : parseFloat(tarjetas);
    pasivos += (otrosP == null || otrosP == undefined || otrosP == "") ? 0 : parseFloat(otrosP);
    print("ResultP","Total de pasivos: €",pasivos);

    debugger;
    if ((pasivos != 0)){
        setPorcentajesPasivos("Hipotecas",calcularPorcentaje(pasivos,hipotecas));
        setPorcentajesPasivos("Préstamos vehículos",calcularPorcentaje(pasivos,prestamosVeh));
        setPorcentajesPasivos("Préstamos personales",calcularPorcentaje(pasivos,prestamos));
        setPorcentajesPasivos("Tarjetas de crédito",calcularPorcentaje(pasivos,tarjetas));
        setPorcentajesPasivos("Otras deudas",calcularPorcentaje(pasivos,otrosP));
        print("ResultP","Total de pasivos: €",parseFloat(pasivos).toFixed(2));

        // Análisis de porcentajes
        analisisPorcentajes(porcentajesPasivos,"ResultPA","Análisis de los pasivos (%):");

        // Top 3
        top3(porcentajesPasivos,"ResultPTop3","Top 3 de los pasivos: ");
    }
}


function onClickButtonActivosPasivos(){
    onClickButtonActivos();
    onClickButtonPasivos();

    riqueza = activos - pasivos;
    print("ResultAP","Tu riqueza neta es de: €",parseFloat(riqueza).toFixed(2));
    // Inmuebles - Hipotecas
    const inmuebles = document.getElementById("InputInmuebles").value;
    const hipotecas = document.getElementById("InputHipotecas").value; 
    const valorInmuebles = parseFloat(inmuebles) - parseFloat(hipotecas);
    print("ResultAPA","El benefício que aportan tus inmuebles (valor - hipotecas) es de: €",parseFloat(valorInmuebles).toFixed(2));
}
