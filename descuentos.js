/*
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); 
*/

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value; 

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    printResult(precioConDescuento);
}

function printResult(precio){
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con  descuento es: €" + precio;

}

function onClickButtonPriceCoupon(){
    const coupons = [
        {
            name: "Enero",
            discount: 20,
        },
        {
            name: "Especial",
            discount: 60,
        },
        {
            name: "Invierno_10",
            discount: 10,
        },
        {
            name: "Invierno_50",
            discount: 50,
        },
    ];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value; 

    /*
    if (!coupons.includes(couponValue)){
        alert("El cupón "+couponValue + "no es válido")
        return false;
    }
    const i = coupons.indexOf(couponValue);
    const discount = couponsDiscounts[i];
    */

    const isCouponValid = function (coupon){
        return coupon.name === couponValue;
    }
    const userCoupon = coupons.find(isCouponValid);
    if (!userCoupon){
        alert(`El cupón ${couponValue} no es válido`);
        return false;
    }
    const discount = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
    
    printResult(precioConDescuento);

}