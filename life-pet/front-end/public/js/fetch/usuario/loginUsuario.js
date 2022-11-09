document.addEventListener("DOMContentLoaded", function() {
    console.log("Entrei login");
})

async function login(){
    const inputEmail= document.getElementById("input-email")
    const email = inputEmail.value

    const inputSenha= document.getElementById("input-senha")
    const senha = inputSenha.value
    
 console.log(email,senha)
   
   await fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            email,
            senha
        })
   })
    .then(res => res.json())
    .then(res => {
        if(res.mensagemError){
            alertLogin((`${res.mensagemError}`), "error" ,"Tente novamente")
        }
        const usuarios = res.user
        if(res.usuario){
            window.location.href= "http://localhost:4000/agendamento";
            localStorage.setItem("user_id", usuarios.id)
            localStorage.setItem("user_nome",usuarios.nome)
            localStorage.setItem("user_email", usuarios.email)
        }
    })
}

function alertLogin(title, icon, text){
    swal({
        title: title,
        text: text,
        icon: icon,
        button: "ok!",
      });
}

