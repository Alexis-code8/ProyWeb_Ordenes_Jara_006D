
function Iniciar(){
    document.getElementById('correo').value="";
    document.getElementById('pass').value="";
    document.getElementById('correo').focus();
}


const pass=document.getElementById('pass'),
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
})

$(function(){
    $("#Login").validate({
        rules:{           
            correo: {
                required: true,
                email:true                
            },
            pass:{
                required:true
            },

        },
        messages:{
            correo:{
                required: "Por favor Ingrese su correo.",
                email:"Debe ser un formato email."
            },
            pass:{
                required:"Debe ingresar su contraseña",
                minlength:"Minimo 3 caracteres"
            }
        }



    })//fin del validate


})//fin de la funcion
