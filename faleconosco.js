formulario = document.querySelector('form');
btnEnviar = document.querySelector('.btn-primary');
nomeMsgError = document.querySelector(".nome.msg-error")
emailMsgError = document.querySelector(".email.msg-error")

function enviaFormulario(event) {
    event.preventDefault();

    const entradasDoFormulario = new FormData(formulario).entries();
    const{nome , email , observacoes} = Object.fromEntries(entradasDoFormulario)

    const mensagemErroNome = validaNome(nome);
    const mensagemErroEmail = validaEmail(email);

    formulario.reset();
};

function validaNome(nome) {
    const temLetras = /^[a-zA-Z\s]*$/g;
    if(!temLetras.test(nome)) {
        return "O nome só deve conter ter letras."
}
    if(nome.length <= 0) {
        return "O nome é um campo obrigatório"
}
    return "";
};

function validaEmail(email) {
    const ehValido = /^\S+@\s+$/g;
    if(email.length <= 0) {
        return "O email é um campo obrigatório";
}
    if(!ehValido.test(email)) {
        return "O email digitado não é válido.";
}
    return "";
};

btnEnviar.addEventListener('click', enviaFormulario);

formulario.nome.addEventListener('keyup', function () {
    const mensagemErro = validaNome(this.value.trim());
    if (mensagemErro.length == 0) {
        this.classList.add('valido');
        this.classList.remove('invalido');
        nomeMsgError.innerText = "";
    } else {
        this.classList.remove('valido');
        this.classList.add('invalido');
        nomeMsgError.innerText = mensagemErro;
    }
});

formulario.email.addEventListener('keyup', function () {
    const mensagemErro = ehValido(this.value.trim());
    if (mensagemErro.length == 0) {
        this.classList.add('valido');
        this.classList.remove('invalido');
        emailMsgError.innerText = "";
        
    } else {
        this.classList.remove('valido');
        this.classList.add('invalido');
        emailMsgError.innerText = mensagemErro;
    }
});
