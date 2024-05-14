
function Iniciar(){
    document.getElementById('nom').value="";
    document.getElementById('ap').value="";
    document.getElementById('corr').value="";
    document.getElementById('rut').value="";
    document.getElementById('fecha').value="";
    document.getElementById('pass1').value="";
    document.getElementById('pass2').value="";
    document.getElementById('nom').focus();
    
}

const pass=document.getElementById('pass1'),
    icon=document.querySelector(".bx-hide");

icon.addEventListener("click", e=>{
    if(pass.type=="password"){
        pass.type="text";
        icon.classList.remove('bx-hide')
        icon.classList.add('bx-show-alt')
    }
    else{
        pass.type="password";
        icon.classList.remove('bx-show-alt')
        icon.classList.add('bx-hide')
    }
});

const pass2=document.getElementById('pass2'), 
    icon2=document.querySelector(".bx-hide"); 

icon2.addEventListener("click", e=>{ 
    if(pass2.type=="password"){ 
        pass2.type="text"; 
        icon2.classList.remove('bx-hide') 
        icon2.classList.add('bx-show-alt') 
    }
    else{
        pass2.type="password";
        icon2.classList.remove('bx-show-alt') 
        icon2.classList.add('bx-hide') 
    }
});


$(function(){ 
    $("#datos").validate({ 
        rules:{
            nom:{
                required: true
            },
            ap:{
                required: true
            },
            corr:{
                required: true,
                email: true
            },
            rut:{
                required: true
            },
            fecha:{
                required: true
            },
            pass1:{
                required: true
            },
            pass2:{
                required: true,
                equalTo: "#pass1"
            }
        },
        messages: {
            nom: {
                required: "Por favor, ingresa tu nombre.",
                minlength:"Deben que ser mas de 5 caracteres."
            },
            ap: {
                required: "Por favor, ingresa tu apellido.",
                minlength:"Deben que ser mas de 5 caracteres."
            },
            corr: {
                required: "Por favor, ingresa tu correo electrónico.",
                email: "Por favor, ingresa un correo electrónico válido.",
                minlength:"Deben que ser mas de 5 caracteres."
            },
            rut: {
                required: "Por favor, ingresa tu RUT.",
                minlength:"Deben ser 10 caracteres."
            },
            fecha: {
                required: "Por favor, ingresa tu fecha de nacimiento."
            },
            pass1: {
                required: "Por favor, ingresa una contraseña.",
                minlength:"Deben que ser mas de 5 caracteres."
            },
            pass2: {
                required: "Por favor, confirma tu contraseña.",
                equalTo: "Las contraseñas no coinciden.",
                minlength:"Deben que ser mas de 5 caracteres."
            }
        },
        submitHandler: function(form) {
            alert("Usuario creado");
            window.location.href = "Inicio.html";
        }
        
    });
});
