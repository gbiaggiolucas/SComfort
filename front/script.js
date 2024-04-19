
let button = document.getElementById("enviar");

button.onclick = async function () {
    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (email === "") {
        alert("Preencha o campo de E-mail")
    } else if (nome === "") {
        alert("Preencha o campo de Nome")
    } else if (telefone === "") {
        alert("Preencha o campo de Telefone")
    } else {
        let data = {email, nome, telefone}

        const response = await fetch("http://localhost:3001/api/store/task", {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        if (content.success) {
            alert("Sucesso");
        } else {
            alert("Não");
        } 
    }
}

document.getElementById("cart").addEventListener("click", function() {
    window.location.href = "shop.html";
});