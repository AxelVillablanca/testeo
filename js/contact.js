
let boton = document.getElementById('contacto') //Boton de Envio
boton.addEventListener('click', function(e){
    e.preventDefault()
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let asunto = document.getElementById('asunto').value;
    let contenido = document.getElementById('cuerpo').value;

    let cuerpo = 'Nombre: '+nombre + '<br/> Contacto: ' +correo +'<br/> Asunto: ' +asunto + '<br/> Cuerpo: ' +contenido; //EL CUERPO DEL MAIL


    if (nombre.length === 0 || correo.length === 0 || asunto.length === 0 || contenido.length === 0) {//COMPRUEBA QUE LOS CAMPOS TENGAN CONTENIDO
        alert("Por favor complete los campos");
    } else if (validarCorreo(correo)) { // SI VALIDAR CORREO DEVUELVE TRUE SE ENVIA EL CORREO 
        Email.send({
            SecureToken: "0fbf6333-d8ba-4288-9f8c-151a1bdd58a9", //CORREGIR TOKEN, SE LE ASIGNO UN DOMINIO FALSO!
            To: 'academia21.cl@gmail.com',                        
            From: 'axel.villablanca@gmail.com',                 
            Subject: asunto,
            Body: cuerpo
        }).then(
            function(message) {
                alert(message);
                alert("Gracias por comunicarte con Academia21, nos comunicaremos a la brevedad");
                // Limpiar los campos después del envío exitoso
                document.getElementById('nombre').value = '';
                document.getElementById('correo').value = '';
                document.getElementById('asunto').value = '';
                document.getElementById('cuerpo').value = '';
            }
        );
    } else {
        alert("Ingrese un correo válido");
    }
    
    function validarCorreo(correo) { //COMPROBACION DE CORREO
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return expReg.test(correo);
    }
} )
