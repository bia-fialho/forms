function validar() {
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");
   
    if (idade >= 16 && nivel > 5) {
        mensagem.innerText = "Inscrição aceita. Categoria PRO!"
        mensagem.style.color = "green";
    }
    else if (idade >= 16 && nivel <= 5) {
        mensagem.innerText = "Inscrição aceita. Categoria INICIANTE!";
        mensagem.style.color = "blue";
    }
    else {
        mensagem.innerText = "Inscrição negada. Idade mínima: 16 anos";
        mensagem.style.color = "red";
    }
}

function validarDesafio1() {


    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagem2 = document.getElementById ("mensagem2");
   
    if (senha1.length >= 8) {
        if (senha1 == senha2) {
            mensagem2.innerText = "Senha válida";
            mensagem2.style.color = "green";
       
        } else {
            mensagem2.innerText = "Senhas não coincidem";
            mensagem2.style.color = "red";
        }
    }else{
            mensagem2.innerText = "Senha inválida";
            mensagem2.style.color = "red";

        }
   
}

function validarDesafio2 () {
 const idade2 = document.getElementById("idade2").value;
 const estudante = document.getElementById ("estudante").value;
 const mensagem3 = document.getElementById("mensagem3");
 if (idade2 == "sim" || estudante == "sim"){
    mensagem3.innerText = "Parabéns, você GANHOU Desconto!";
     mensagem3.style.color = "green";
 } else {
    mensagem3.innerText = "Uma pena, você não ganhou Desconto.";
    mensagem3.style.color = "red";
 }
}

function validarDesafio3 () {

    const nome2 = document.getElementById ("nome2").value;
    const idade3 = document.getElementById ("idade3").value;
    const mensagem4 = document.getElementById ("mensagem4");
   
    if(nome2.length > 0 && idade3 > 0){
        mensagem4.innerText = "Sistema liberado";
        mensagem4.style.color = "green";
    } else if(nome2.length == 0) {
        mensagem4.innerText = "Campo nome vazio";
        mensagem4.style.color = "blue";
    } else {
        mensagem4.innerText = "Idade inválida.";
        mensagem4.style.color = "red";
    }
}
