document.addEventListener("DOMContentLoaded", function(){
    console.log("Entrei serviço");
})

async function editarServico(){
    const id = localStorage.getItem("serv-id");
    const url = `http://localhost:3000/servico/${id}`;

    const inputAnimal = document.getElementById("edit-animal");
    const animal = inputAnimal.value;

    const inputServico = document.getElementById("edit-servico");
    const servicos =inputServico.value;

    const inputPorte = document.getElementById("edit-porte");
    const porte =inputPorte.value;

    const inputEspecie = document.getElementById("edit-especie");
    const especie =inputEspecie.value;

    const inputNome = document.getElementById("edit-dono");
    const nome_dono =inputNome.value;

    const inputCpf = document.getElementById("edit-cpf");
    const cpf =inputCpf.value;

    const inputTelefone = document.getElementById("edit-telefone");
    const telefone =inputTelefone.value;

    const inputData = document.getElementById("edit-data");
    const data =inputData.value;

    fetch(url,{
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            nome_animal:animal,
            servicos,
             porte,
             especie,
             nome_dono,
             cpf,
             telefone,
             horario:data
        })
    })
    .then(res => res.json())
    .then(res =>{ console.log(res)

        if(res.mensagemError){
            alertServico((`${res.mensagemError}`), "error" ,"Tente novamente")
        }
            
        if(animal !== " "){
        localStorage.removeItem("serv-animal")
        localStorage.setItem("serv-animal", animal)
        }

        if(servicos !== " "){
        localStorage.removeItem("serv-servicos")
        localStorage.setItem("serv-servicos", servicos)
        }

        if(porte !== " "){
        localStorage.removeItem("serv-porte")
        localStorage.setItem("serv-porte", porte)
        }

        if(especie !== " "){
        localStorage.removeItem("serv-especie")
        localStorage.setItem("serv-especie", especie)
        } 

        if(nome_dono!== " "){
        localStorage.removeItem("serv-dono")
        localStorage.setItem("serv-dono", nome_dono)
        }

        if(cpf !== " "){
        localStorage.removeItem("serv-cpf")
        localStorage.setItem("serv-cpf", cpf)
        }

        if(telefone !== " "){
        localStorage.removeItem("serv-telefone")
        localStorage.setItem("serv-telefone", telefone)
        }

        if(data !== " "){
        localStorage.removeItem("serv-data")
        localStorage.setItem("serv-data", data)
        }    
        
        console.log(res)
        if (res.serv) {
            alertServico("Agendamento atualizado!!!", "success")
            console.log("Cadastrado!")
        }
           

    })

}

function alertServico(title, icon, text){
    swal({
        title: title,
        text: text,
        icon: icon,
        button: "ok!",
      })
}


function inicialForm(){
   const animal = localStorage.getItem("serv-animal" );
   const servicos = localStorage.getItem("serv-servicos");
   const porte = localStorage.getItem("serv-porte");
   const especie = localStorage.getItem("serv-especie");
   const nome_dono = localStorage.getItem("serv-dono");
   const cpf = localStorage.getItem("serv-cpf");
   const telefone = localStorage.getItem("serv-telefone");
   const data = localStorage.getItem("serv-data");


   const inputAnimal = document.getElementById("edit-animal");
    inputAnimal.setAttribute("value", animal);

   const inputServico = document.getElementById("edit-servico");
   inputServico.setAttribute("value", servicos);

   const inputPorte = document.getElementById("edit-porte");
   inputPorte.setAttribute("value", porte);

   const inputEspecie = document.getElementById("edit-especie");
   inputEspecie.setAttribute("value", especie);

   const inputNome = document.getElementById("edit-dono");
   inputNome.setAttribute("value", nome_dono);

   const inputCpf = document.getElementById("edit-cpf");
   inputCpf.setAttribute("value", cpf);

   const inputTelefone = document.getElementById("edit-telefone");
   inputTelefone.setAttribute("value", telefone);

   const inputData = document.getElementById("edit-data");
   inputData.setAttribute("value", data);
}

document.addEventListener("DOMContentLoaded", () => {
    inicialForm()
})

