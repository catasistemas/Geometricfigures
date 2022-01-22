/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* --------------------Popup------------------ */

var openSquare = document.getElementById('imgSquare'),
    openTriangle = document.getElementById('imgTriangle'),
    openCircle = document.getElementById('imgCircle'),
    openRectangle = document.getElementById('imgRectangle'),
    openHexagon = document.getElementById('imgHexagon'),
    showSolSquare = document.getElementById('resolveSquare'),
    showSolTriangle = document.getElementById('resolveTriangle'),
    showSolCircle = document.getElementById('resolveCircle'),
    showSolRectagle = document.getElementById('resolveRec'),
    showSolHexagon = document.getElementById('resolveHex'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    closePopup = document.getElementById('cerrar-popup'),
    closePopupT = document.getElementById('cerrar-popupT'),
    closePopupC = document.getElementById('cerrar-popupC'),
    closePopupR = document.getElementById('cerrar-popupR'),
    closePopupH= document.getElementById('cerrar-popupH');

showSolSquare.addEventListener('click', function() {
reSquare.classList.add('active');
});

showSolTriangle.addEventListener('click', function() {
    reTria.classList.add('active');
});

showSolCircle.addEventListener('click', function() {
    reCircle.classList.add('active');
});

showSolRectagle.addEventListener('click', function() {
    reRec.classList.add('active');
});

showSolHexagon.addEventListener('click', function() {
    reHex.classList.add('active');
    });

openSquare.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

openTriangle.addEventListener('click', function(){
    overlayT.classList.add('active');
    popupT.classList.add('active');
})

openCircle.addEventListener('click', function(){
    overlayC.classList.add('active');
    popupC.classList.add('active');
})

openRectangle.addEventListener('click', function(){
    overlayR.classList.add('active');
    popupR.classList.add('active');
})

openHexagon.addEventListener('click', function(){
    overlayH.classList.add('active');
    popupH.classList.add('active');
})

closePopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

closePopupT.addEventListener('click', function(){
    overlayT.classList.remove('active');
    popupT.classList.remove('active');
});

closePopupC.addEventListener('click', function(){
    overlayC.classList.remove('active');
    popupC.classList.remove('active');
});

closePopupR.addEventListener('click', function(){
    overlayR.classList.remove('active');
    popupR.classList.remove('active');
});

closePopupH.addEventListener('click', function(){
    overlayH.classList.remove('active');
    popupH.classList.remove('active');
});


//------------------- Codigo del triangulo
//Con la formula de heron calculamos el area del triangulo
const ladosdiv2 =(lado1, lado2, base)=> (lado1 + lado2 + base)/2;
const perimetroTriangulo = (lado1, lado2, base)=> parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);

//------------------- Codigo Circulo;

// Rectangulo

//--------------------Hexagono Regular;

//Aqui interactuamos con html
//Cuadrado
// eslint-disable-next-line no-unused-vars
function calcuCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetroCuadrado = (lado)=> lado * 4;
    const areaCuadrado = (lado)=> lado * lado;
    document.getElementById('reSquare').innerHTML = `The perimeter of the square is: <strong>${perimetroCuadrado(value)} cm</strong>
    and the area is: <strong>${areaCuadrado(value)} cm^2</strong>`;
}
//Triangulo
function calcuTri() {
    const inputA = document.getElementById("inputTriA");
    const valueA = parseFloat(inputA.value);
    const inputB = document.getElementById("inputTriB");
    const valueB = parseFloat(inputB.value);
    const inputC = document.getElementById("inputTriBase");
    const valueBase = parseFloat(inputC.value);
    const ss = ladosdiv2(valueA, valueB, valueBase);
    const formulaHeron = (ladoa, ladob, baset)=> parseFloat(ss*(ss - ladoa)*(ss - ladob)*(ss - baset));
    const heron = formulaHeron(valueA, valueB, valueBase);
    const areaTriangulo = ()=> Math.sqrt(heron);
    document.getElementById('reTria').innerHTML = `The perimeter of the triangle is: <strong>${perimetroTriangulo(valueA, valueB, valueBase)} cm</strong>
    and the area is: <strong>${areaTriangulo()} cm^2</strong>`;
}

function calcuAlTri(){
    const inputA = document.getElementById("inputTriA1");
    const valueA = parseFloat(inputA.value);
    const inputB = document.getElementById("inputTriB1");
    const valueB = parseFloat(inputB.value);
    const inputC = document.getElementById("inputTriBase1");
    const valueBase = parseFloat(inputC.value);
    if (valueA ==    valueB) {
    const ss = ladosdiv2(valueA, valueB, valueBase);
    const formulaHeron = (ladoa, ladob, baset)=> parseFloat(ss*(ss - ladoa)*(ss - ladob)*(ss - baset));
    const heron = formulaHeron(valueA, valueB, valueBase);
    const areaTriangulo = ()=> Math.sqrt(heron);
    const areaT = areaTriangulo();
    const altura = ()=> (2 * areaT) / valueBase;
    alert(`La altura del triangulo isóseles es: ${altura()}`);
    } else {
        alert("Las medidas ingresada no corresponden a un triángulo isóseles");
    }
}

//Circunferencia

function calcuCircu() {
    const inputCir = document.getElementById("inputCircle");
    const radio = parseFloat(inputCir.value);
    const perimetroCirculo = (radio)=> radio * 2 * Math.PI;
    const areaCirculo = (radio)=> Math.PI * Math.pow(radio, 2);  //Math.pow es para calcular potencia.
    document.getElementById('reCircle').innerHTML = `The perimeter of the circle is: <strong>${perimetroCirculo(radio)} cm</strong>
    and the area is: <strong>${areaCirculo(radio)} cm^2</strong>`;
}

function calcuRec() {
    const inputRec1 = document.getElementById("inputRec1");
    const ladoRec1 = parseFloat(inputRec1.value);
    const inputRec2 = document.getElementById("inputRec2");
    const ladoRec2 = parseFloat(inputRec2.value);
    if (ladoRec1 !== ladoRec2) {
        const perimetroRec =(l1, l2)=> (l1 + l2) * 2;
        const areaRec = (l1, l2)=>l1 * l2;
        document.getElementById('reRec').innerHTML = `The perimeter of the rectangle is: <strong>${perimetroRec(ladoRec1, ladoRec2)} cm</strong>
        and the area is: <strong>${areaRec(ladoRec1, ladoRec2)} cm^2</strong>`
    }else {
        document.getElementById('reRec').innerHTML = `If you want to form a rectangle, its sides cannot be equal!`;
    }
}

function calcuHex() {
    const inputHex = document.getElementById("inputHex1");
    const ladoHex = parseFloat(inputHex.value);
    const radiansDegre = ((30 * Math.PI) / 180);
    const ap = (ladoHex / (2 * Math.tan(radiansDegre)));
    const perimetroHex =(lado)=> lado * 6;
    const areaHex = (lado)=> lado * 3 * ap;
    document.getElementById('reHex').innerHTML = `The perimeter of the regular hexagon is: <strong>${perimetroHex(ladoHex)} cm</strong>
    and the area is: <strong>${areaHex(ladoHex)} cm^2</strong>`;
}