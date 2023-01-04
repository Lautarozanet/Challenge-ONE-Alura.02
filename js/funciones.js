// var palabraIngresada = sessionStorage.getItem('nuevoArray');
// var palabrasSecretas =["TIBURON","PADEL","HERMANO","CONSTITUCION","PERRO","DEPORTES","ARGENTINA","ESTRES"];

var BtnInicio = document.querySelector("#id-inicio");
var botonAñadir = document.querySelector("#nueva-palabra");
var spanVidas = document.querySelector("#vidas");
var palabraRandom;
var vidas;
    
dibujarHorca();

document.getElementById("span-erradas").style.visibility = "hidden";

BtnInicio.addEventListener("click",function(){
    
    BtnInicio.blur();
    vidas =  7;
    spanVidas.innerHTML = vidas;    
    dibujarAhorcado(vidas);

    document.getElementById("span-erradas").style.visibility = "visible";
    document.getElementById("cont-vidas").style.visibility = "visible";
    document.getElementById("espacios-caracteres").style.visibility = "hidden";
    document.getElementById("espacio-guiones").style.visibility = "visible";

    palabraRandom = palabrasSecretas[numeroRandom];

    var ulCaracteres = document.querySelector("#espacios-caracteres");
    ulCaracteres.innerHTML = "";

    var ulGuiones = document.querySelector("#espacio-guiones");
    ulGuiones.innerHTML = "";

    var prueba = document.querySelector("#letras-erradas");
    prueba.innerHTML = "";
    

    if(palabraIngresada !==null){
        var numeroRandom = generarNumeroRandom();
        var palabraSplit = palabraIngresada.split(",");
        var palabraElegida = palabraSplit[numeroRandom];
        construirLi(palabraElegida);
    }else{
        var numeroRandom = generarNumeroRandom();
        var palabraElegida = palabrasSecretas[numeroRandom];
        construirLi(palabraElegida);
    }
    
   

    function construirLi(palabra){
        var palabraRandom = palabra.split("");
    
        for (let i = 0 ; i < palabraRandom.length ; i++) {
            var liCaracteres = document.createElement("li");
            liCaracteres.textContent = palabraRandom[i];
            ulCaracteres.appendChild(liCaracteres);
    
            var liGuiones = document.createElement("li");
            liGuiones.textContent = "-";
            ulGuiones.appendChild(liGuiones);
        }
    }

})

function generarNumeroRandom () {
    var max = palabrasSecretas.length - 1;
    return Math.round(Math.random()* max);
}

document.addEventListener("keypress", function(elemento) {
   

    if (document.getElementById("espacios-caracteres").style.visibility == "hidden") {
        
        var caracter = elemento.key.toUpperCase();
        
        if (validarCaracteres(caracter) == true) {
            
            var prueba = document.querySelectorAll("#espacios-caracteres li");
            var contadorErrores = 0;

            for (let i = 0; i < prueba.length; i++) {

                if (prueba[i].textContent == caracter) {
                    prueba[i].style.visibility = "visible";
                } else {
                    contadorErrores++;
                    if (contadorErrores == prueba.length) {
                        vidas = vidas - 1;
                        spanVidas.innerHTML = vidas;
                        mostrarLetraUtilizada(caracter);
                    }
                }
            }
        }
        verificadorWin();
    }
})

function mostrarLetraUtilizada (letra) {

    var test = document.querySelectorAll("#letras-erradas li");

    if (test.length == 0) {
        var ul = document.querySelector("#letras-erradas");
        var li = document.createElement("li");
        li.textContent = letra;
        ul.appendChild(li);
    } else {
        var contadorLetras = 0
        for (let i = 0; i < test.length; i++) {
            if (test[i].textContent != letra) {
                contadorLetras++;
                if (contadorLetras == test.length) {
                var ul = document.querySelector("#letras-erradas");
                var li = document.createElement("li");
                li.textContent = letra;
                ul.appendChild(li);
                dibujarAhorcado(vidas);
                }
            } else {
                vidas++;
                spanVidas.innerHTML = vidas;
            }
        }
    }
    dibujarAhorcado(vidas);
}

function Reinicio(){
    location.reload();
}


  