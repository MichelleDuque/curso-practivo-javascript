//Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
    
// console.log("El perimetro del cuadro es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadro es: " + areaCuadrado + " cms cuadrados");
console.groupEnd();


//Código del triángulo
console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4


// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm.");

// const alturaTriangulo = 5.5
// console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2,base){
    return (lado1 + lado2 + base);
}
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura){
    return (base * altura)/2
}
// console.log("El area del triángulo es: " + areaTriangulo + " cms cuadrados");
console.groupEnd();

//Código del círculo
console.group("Círculo")
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm");
//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diametro del círculo es: " + diametroCirculo + " cm");
//PI
const PI = Math.PI;
// console.log("PI es: " + PI + " cm");
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del círculo es: " + perimetroCirculo + " cm");
//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log("El áreadel círculo es: " + areaCirculo + " cms cudrados");
console.groupEnd();

//Aquí interactuamos con HTML

//Cuadrado 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputLado1")
    const valueLado1 = parseInt(lado1.value);
    const lado2 = document.getElementById("inputLado2")
    const valueLado2 =  parseInt(lado2.value);
    const base = document.getElementById("base")
    const valueBase =  parseInt(base.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const base = document.getElementById("base")
    const valueBase = base.value;
    const altura = document.getElementById("base")
    const valueAltura = altura.value;
    const area = areaTriangulo(valueBase, valueAltura)
    alert(area);
}

//Circulo

function calcularDiametroCirculo(){
    const radio = document.getElementById("inputCirculo")
    const value = radio.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculo")
    const value = radio.value;
    const diametro = diametroCirculo(value);
    const perimetro = perimetroCirculo(diametro);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculo")
    const value = radio.value;
    const area = areaCirculo(value);
    alert(area);
}