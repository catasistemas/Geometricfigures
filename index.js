/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* --------------------Popup------------------ */

var openSquare = document.getElementById('imgSquare'),
    openTriangle = document.getElementById('imgTriangle'),
    openCircle = document.getElementById('imgCircle'),
    openRectangle = document.getElementById('imgRectangle'),
    openHexagon = document.getElementById('imgHexagon'),
    openEllipse = document.getElementById('imgEllipse'),
    showSolSquare = document.getElementById('resolveSquare'),
    showSolTriangle = document.getElementById('resolveTriangle'),
    showSolCircle = document.getElementById('resolveCircle'),
    showSolRectagle = document.getElementById('resolveRec'),
    showSolHexagon = document.getElementById('resolveHex'),
    showSolEllipse = document.getElementById('resolveEllip'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    closePopup = document.getElementById('cerrar-popup'),
    closePopupT = document.getElementById('cerrar-popupT'),
    closePopupC = document.getElementById('cerrar-popupC'),
    closePopupR = document.getElementById('cerrar-popupR'),
    closePopupH= document.getElementById('cerrar-popupH'),
    closePopupE= document.getElementById('cerrar-popupE');


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

showSolEllipse.addEventListener('click', function() {
    reEllip.classList.add('active');
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

openEllipse.addEventListener('click', function(){
    overlayE.classList.add('active');
    popupE.classList.add('active');
})

closePopup.addEventListener('click', function(){
    const limpiar = document.getElementById('reSquare');
    reSquare.classList.remove('active');
    limpiar.innerHTML = '';
    document.getElementById('inputCuadrado').value ='';
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

closePopupT.addEventListener('click', function(){
    const limpiar = document.getElementById('reTria');
    reTria.classList.remove('active');
    limpiar.innerHTML = '';
    document.getElementById('inputTriA').value ='';
    document.getElementById('inputTriB').value ='';
    document.getElementById('inputTriBase').value ='';
    overlayT.classList.remove('active');
    popupT.classList.remove('active');
});

closePopupC.addEventListener('click', function(){
    const limpiar = document.getElementById('reCircle');
    reCircle.classList.remove('active');
    limpiar.innerHTML = '';
    document.getElementById('inputCircle').value ='';
    overlayC.classList.remove('active');
    popupC.classList.remove('active');
});

closePopupR.addEventListener('click', function(){
    const limpiar = document.getElementById('reRec');
    reRec.classList.remove('active');
    limpiar.innerHTML = '';
    document.getElementById('inputRec1').value ='';
    document.getElementById('inputRec2').value ='';
    overlayR.classList.remove('active');
    popupR.classList.remove('active');
});

closePopupH.addEventListener('click', function(){
    const limpiar = document.getElementById('reHex');
    reHex.classList.remove('active');
    limpiar.innerHTML = '';
    document.getElementById('inputHex1').value ='';
    overlayH.classList.remove('active');
    popupH.classList.remove('active');
});

closePopupE.addEventListener('click', function(){
    const limpiar = document.getElementById('reEllip');
    reEllip.classList.remove('active');
    limpiar.innerHTML = '';
    document.getElementById('inputEllip1').value ='';
    document.getElementById('inputEllip2').value ='';
    overlayE.classList.remove('active');
    popupE.classList.remove('active');
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
    if(value ===''){
        document.getElementById('reSquare').innerHTML = `Fields cannot remain empty`
    }else {
    const perimetroCuadrado = (lado)=> lado * 4;
    const areaCuadrado = (lado)=> lado * lado;
    document.getElementById('reSquare').innerHTML = `The perimeter of the square is: <strong>${perimetroCuadrado(value).toFixed(2)} cm</strong>
    and the area is: <strong>${areaCuadrado(value).toFixed(2)} cm^2</strong>`;
    }
}
//Triangulo
function calcuTri() {
    const inputA = document.getElementById("inputTriA");
    const inputB = document.getElementById("inputTriB");
    const inputC = document.getElementById("inputTriBase");
    const valueA = inputA.value;
    const valueAa= parseInt(valueA)
    const valueB = inputB.value;
    const valueBb = parseFloat(valueB);
    const valueC = inputC.value;
    const valueBase = parseFloat(valueC);
    if(valueA === '' || valueB === '' || valueC === ''){
        document.getElementById('reTria').innerHTML = `Fields cannot remain empty`
    }else {
    const ss = ladosdiv2(valueAa, valueBb, valueBase);
    const formulaHeron = (ladoa, ladob, baset)=> parseFloat(ss*(ss - ladoa)*(ss - ladob)*(ss - baset));
    const heron = formulaHeron(valueAa, valueBb, valueBase);
    const areaTriangulo = ()=> Math.sqrt(heron);
    document.getElementById('reTria').innerHTML = `The perimeter of the triangle is: <strong>${perimetroTriangulo(valueA, valueB, valueBase).toFixed(2)} cm</strong>
    and the area is: <strong>${areaTriangulo().toFixed(2)} cm^2</strong>`;
    }
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
    const radioS = inputCir.value;
    const radio = parseFloat(radioS);
    if (radioS === ''){
        document.getElementById('reCircle').innerHTML = `Fields cannot remain empty`
    }else {
        const perimetroCirculo = (radio)=> radio * 2 * Math.PI;
        const areaCirculo = (radio)=> Math.PI * Math.pow(radio, 2);  //Math.pow es para calcular potencia.
        document.getElementById('reCircle').innerHTML = `The perimeter of the circle is: <strong>${perimetroCirculo(radio).toFixed(2)} cm</strong>
        and the area is: <strong>${areaCirculo(radio).toFixed(2)} cm^2</strong>`;
    }
}

function calcuRec() {
    const inputRec1 = document.getElementById("inputRec1");
    const ladoReca = inputRec1.value;
    const ladoRec1 = parseFloat(ladoReca);
    const inputRec2 = document.getElementById("inputRec2");
    const ladoRecb = inputRec2.value;
    const ladoRec2 = parseFloat(ladoRecb);
    if (ladoReca !== ladoRecb) {
        const perimetroRec =(l1, l2)=> (l1 + l2) * 2;
        const areaRec = (l1, l2)=>l1 * l2;
        document.getElementById('reRec').innerHTML = `The perimeter of the rectangle is: <strong>${perimetroRec(ladoRec1, ladoRec2).toFixed(2)} cm</strong>
        and the area is: <strong>${areaRec(ladoRec1, ladoRec2).toFixed(2)} cm^2</strong>`
        }else if (ladoReca === '' || ladoRecb === ''){
            document.getElementById('reRec').innerHTML = `Fields cannot remain empty`
        }else {
            document.getElementById('reRec').innerHTML = `If you want to form a rectangle, its sides cannot be equal!`;
    }
}

function calcuHex() {
    const inputHex = document.getElementById("inputHex1");
    const ladoHexx = inputHex.value
    const ladoHex = parseFloat(ladoHexx);
    const radiansDegre = ((30 * Math.PI) / 180);
    const ap = (ladoHex / (2 * Math.tan(radiansDegre)));
    if (ladoHexx === ''){
        document.getElementById('reHex').innerHTML = `Fields cannot remain empty`
    }else {
    const perimetroHex =(lado)=> lado * 6;
    const areaHex = (lado)=> lado * 3 * ap;
    document.getElementById('reHex').innerHTML = `The perimeter of the regular hexagon is: <strong>
    ${perimetroHex(ladoHex).toFixed(2)} cm</strong>
    and the area is: <strong>${areaHex(ladoHex).toFixed(2)} cm^2</strong>`;
    }
}

function calcuEllip() {
    const inputEllip1 = document.getElementById("inputEllip1");
    const inputEllip2 = document.getElementById("inputEllip2");
    const radioS1 = inputEllip1.value;
    const radioS2 = inputEllip2.value;
    const radioEllip1 = parseFloat(radioS1);
    const radioEllip2 = parseFloat(radioS2);
    if (radioS1 === '' || radioS2 === ''){
        document.getElementById('reEllip').innerHTML = `Fields cannot remain empty`
    }else {
        const raizEllip = (Math.pow(radioEllip1, 2) + Math.pow(radioEllip2, 2))/2;
        const perimetroEllip = ()=> 2 * Math.PI * Math.sqrt(raizEllip);
        const areaEllip = (radio1, radio2)=> Math.PI * radio1 * radio2;
        document.getElementById('reEllip').innerHTML = `The perimeter of the ellipse is: <strong>
        ${perimetroEllip().toFixed(2)} cm</strong> and the area is: <strong>${areaEllip(radioEllip1, radioEllip2).toFixed(2)} cm^2</strong>`;
    }
}