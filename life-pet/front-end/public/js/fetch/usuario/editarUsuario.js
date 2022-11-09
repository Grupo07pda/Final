document.addEventListener("DOMContentLoaded", function() {
    console.log("Entrei editar");
})

async function editarUsuario(){
    const id = localStorage.getItem("user_id");
    const url = `http://localhost:3000/usuario/${id}`;

    const inputNome =  document.querySelector("#edit-nome");
    const nome = inputNome.value;

    const inputEmail=  document.getElementById("edit-email");
    const email = inputEmail.value;
    
    const inputSenha =  document.getElementById("edit-senha");
    const senha = inputSenha.value;
    
   await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(res =>{

        if(res.mensagemError){
            alertServico((`${res.mensagemError}`), "error" ,"Tente novamente")
        }

        if(nome !== " "){
            localStorage.removeItem("user_nome")
            localStorage.setItem("user_nome", nome)
            }

            if(email !== " "){
            localStorage.removeItem("user_email")
            localStorage.setItem("user_email", email)
            }
        console.log(res)
        if (res.usuario) {
            alertUsuario("Usuário atualizado!!!", "success")
            console.log("Cadastrado!")
        } 
    })

}


function alertUsuario(title, icon, text){
    swal({
        title: title,
        text: text,
        icon: icon,
        button: "ok!",
      })
}


function inicialInput(){
    const nome = localStorage.getItem("user_nome")
    const email = localStorage.getItem("user_email")
    const senha = localStorage.getItem("user_senha")
   

    const nomeInput = document.getElementById("edit-nome")
    nomeInput.setAttribute("value", nome)

    const emailInput = document.getElementById("edit-email")
    emailInput.setAttribute("value", email)
    
    const senhaInput = document.getElementById("edit-senha")
    senhaInput.setAttribute("value", senha)

}

document.addEventListener("DOMContentLoaded", () => {
    inicialInput()
})