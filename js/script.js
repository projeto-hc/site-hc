// navbar

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/fechar.png";
    }
}



// faq

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        const arrow = accordion.querySelector('.arrow');

        body.classList.toggle('active');
        arrow.classList.toggle('rotate');

    })
})



// cadastro

function validar() {
    nome = document.getElementById("nome");
    email = document.getElementById("email");
    telefone = document.getElementById("telefone");
    senha = document.getElementById("senha");
    mensagem = document.getElementById("mensagem");


    valido = false;

    if (nome && nome.value.trim() === "") {
        document.getElementById("erroNome").innerText = "Campo nome é obrigatório!";
        nome.focus();
        return false;
    } else if (nome) {
        document.getElementById("erroNome").innerText = "";
    }

    // -----------------------------------

    if (email && email.value.trim() === "") {
        document.getElementById("erroEmail").innerText = "Campo email é obrigatório!";
        email.focus();
        return false;
    } else if (email) {
        document.getElementById("erroEmail").innerText = "";
    }

    // --------------------------------------

    if (telefone && telefone.value.trim() === "") {
        document.getElementById("erroTelefone").innerText = "Campo telefone é obrigatório!";
        telefone.focus();
        return false;
    } else if (telefone) {
        document.getElementById("erroTelefone").innerText = "";
    }

    // -------------------------------------------

    if (senha && senha.value.trim() === "") {
        document.getElementById("erroSenha").innerText = "Campo senha é obrigatório!";
        senha.focus();
        return false;
    } else if (senha) {
        document.getElementById("erroSenha").innerText = "";
    }

    // ---------------------------

    if (mensagem && mensagem.value.trim() === "") {
        document.getElementById("erroMensagem").innerText = "Campo mensagem é obrigatório!";
        mensagem.focus();
        return false;
    } else if (mensagem) {
        document.getElementById("erroMensagem").innerText = "";
    }


    // ---------------------

    if (valido) {
        window.location.href = "inicio.html";
    }

}
