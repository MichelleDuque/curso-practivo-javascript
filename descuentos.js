// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice")
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount")
    const discount = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    const ResultPrice = document.getElementById("ResultPrice")
    ResultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;

}

const cupon = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceCupon(){
    const inputPrice2 = document.getElementById("inputPrice2")
    const price = inputPrice2.value;
    const inputCupon = document.getElementById("inputCupon")
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue) {
        case cupon[0]: // "JuanDC_es_Batman"
        descuento = 15;
        break;
        case cupon[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case cupon[2]: // "es_un_secreto"
        descuento = 25;
        break;
    }

    const precioConCupon = calcularPrecioConDescuento(price, descuento);
    const ResultCupon = document.getElementById("ResultCupon")
    ResultCupon.innerText = "El precio con cupon son: $" + precioConCupon;

}