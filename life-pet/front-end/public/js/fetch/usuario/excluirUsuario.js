document.addEventListener("DOMContentLoaded", function() {
    console.log("Entrei excluir");
});

async function excluirUsuario(){
    const id = localStorage.getItem("user_id");
    const url = `http://localhost:3000/usuario/${id}`;

     
   await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
})
.then(res => res.json())
.then(res => console.log("Usuario deletado!!!"))




}
