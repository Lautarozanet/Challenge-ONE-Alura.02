var palabraIngresada = sessionStorage.getItem('nuevoArray');
var palabrasSecretas = ["TIBURON","PADEL","HERMANO","CONSTITUCION","PERRO","DEPORTES","ARGENTINA","ESTRES"];

var palabraOculta = "";
var palabraAdivinada = "";


function ingresoNuevaPalabra(){

    var input= document.querySelector("#input-nueva-palabra");
    var palabraAgregada = input.value.toUpperCase();
    var validacion
    var array= palabraAgregada.split("");
    
    if (palabraAgregada.length== 0){
        alert("No puedes agregar una palabra vacia");
    }
    if(palabraAgregada.length> 10){
        alert("La palabra no puede superar los 10 caracteres")
    }
    else{
        console.log(array);
        var mapeo= array.map(function(e){
        
            if(e.charCodeAt()<=90 && e.charCodeAt()>=65 || e.charCodeAt()== 165){
                return true;
            }else{
                return false;
            }          
        }) 
        console.log(mapeo);
        validacion= mapeo.includes(false);
            if(palabrasSecretas.includes(palabraAgregada)==true){
            alert("Ya ingreso esa palabra");
            }
            else{
                if(validacion== true){
                    alert("texto invalido");
                }
                
                if(validacion== false){
                    palabrasSecretas.push(palabraAgregada);
                    sessionStorage.setItem("nuevoArray",palabrasSecretas);
                    console.log(palabrasSecretas);
                    alert("Ha ingresado su palabra con exito!")
                }
            }
    }
}

function validarCaracteres(test) {
    for (let i = 0; i < test.length; i++) {
        if (test.codePointAt(i) < 65 || test.codePointAt(i) > 90 ) {
            return false;
        } else {
            return true;
        } 
    }
}

function verificadorWin() {
    var prueba = document.querySelectorAll("#espacios-caracteres li");
    var contadorWin = 0;
    for (let i = 0; i < prueba.length; i++) {

        if (prueba[i].style.visibility == "visible") {
        contadorWin++;
        }
    }

    if (contadorWin == prueba.length && prueba.length != 0) {
        alertaGanaste ();
        return true;
    }
}

function alertaGanaste(){
    alert("Felicitaciones, lograste superar el reto!")
}

function alertaPerdiste(){
    
    var fin
    if (confirm("Has perdido!,quieres intentar nuevamente?") == true) {
        Reinicio();
    } else {
        fin= "You canceled!";
    }
}

