const nombre = document.getElementById("nombre")
const contrasenia = document.getElementById("contra")
const email = document.getElementById("email")
const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{

    e.preventDefault();
    let error = "";
    let enviar = false;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;




    if(nombre.value.length < 6){
        error += "El nombre tiene menos de 6 caracteres  <br>"
        enviar = true;
        console.log(error);
    }
    if(contrasenia.value.length < 8){
        error += "La contrasenia es menor a 8 caracteres <br>"
        enviar = true;
        console.log(error);
    }
    if( !regexEmail.test(email.value) ){
        error += "El email escrito no es un mail valido"
        enviar += true;
        console.log(error);
    }

    if(enviar){
        parrafo.innerHTML = error;
    }else{
        parrafo.innerHTML = "Enviado";
    }



});




