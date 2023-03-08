


$.ajax({
    url: 'https://randomuser.me/api/?nat=es',
    dataType: 'json',
    success: function(data) {
        

        foto = data.results[0].picture.large;
        apellido= data.results[0].name.last;
        nombre = data.results[0].name.first;
        celular = data.results[0].cell;
        edad = data.results[0].dob.age;
        calle = data.results[0].location.street.name;
        numeroCalle = data.results[0].location.street.number;
        mail = data.results[0].email;
        
        
       
        //foto.src=foto;
       // apellido.innerText=apellido.toUpperCase();
        //nombre.innerText=nombre;

        
        domicilio.innerText=calle +" "+numeroCalle; 
        celular.innerText=celular;
       
       nombrecompleto.innerText=nombre+ " "+ apellido;
       edadPersona.innerText=edad;
       telefono.innerText=celular;
       fotoperfil.src=foto;
       email.innerText= mail;
        seed = data.info.seed;
        
    }
});

//validar formulario
var nom = document.getElementById("nom");
var correo = document.getElementById("correo");


function validarFormulario() {
	nom.addEventListener("input", validarNom)
    
    correo.addEventListener("input", validarCorreo)
    


   validarNom();
    validarCorreo();
    
}


 function validarNom() {

	if (nom.value == ""){
         nom.setCustomValidity("No te olvides de ingresar tu nombre")

	} else {
	    nom.setCustomValidity("")
}
}


function validarCorreo() {

	if (correo.value == ""){
         correo.setCustomValidity("No te olvides de ingresar tu email")
	} else {
	    correo.setCustomValidity("")
}
}




window.addEventListener('load', validarFormulario);




