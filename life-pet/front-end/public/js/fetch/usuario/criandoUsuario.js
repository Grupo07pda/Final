document.addEventListener("DOMContentLoaded", function() {
    console.log("Entrei criar");
})  
 function criar(){
    const inputNome = document.getElementById("inputNome");
    const nome = inputNome.value

    const inputEmail = document.getElementById("inputEmail");
    const email = inputEmail.value

    const inputSenha = document.getElementById("inputSenha");
    const senha = inputSenha.value
   
    const url= "http://localhost:3000/usuario"
    fetch( url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome, 
            email,
            senha
        })
    })
    .then(res => res.json())
    .then(res => {console.log(res);

        if(res.mensagemError){
            alertUsuario((`${res.mensagemError}`), "error" ,"Tente novamente")
        }
        const usuarios = res.user
        if(usuarios){
            alertUsuario("Cadastrado com sucesso", "success", "Faça o login e continue.")
            localStorage.setItem("user_id", usuarios.id)
            localStorage.setItem("user_nome",usuarios.nome)
            localStorage.setItem("user_email", usuarios.email)
            
        }

    })
    
 }

function alertUsuario(title, icon, text){
    swal({
        title: title,
        text: text,
        icon: icon,
        button: "ok!",
      });
}