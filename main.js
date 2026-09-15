document.addEventListener("DOMContentLoaded", function () {


  const menuBtn = document.getElementById("menuBtn");

  const menu = document.getElementById("menu");

  const links = menu.querySelectorAll("a");


  menuBtn.addEventListener("click", function () {

    menu.classList.toggle("aberto");

  });


  links.forEach(function (link) {

    link.addEventListener("click", function () {

      menu.classList.remove("aberto");

    });

  });


  /* =========================
     FORMULÁRIO
  ========================= */

  const form = document.querySelector(".cadastro");



  if (!form) {

    return;

  }


  form.addEventListener("submit", function (e) {

    e.preventDefault();


    const nome =
      document.querySelector('input[name="Nome"]').value.trim();


    const email =
      document.querySelector('input[name="E-mail"]').value.trim();


    const telefone =
      document.querySelector('input[name="Whatsapp"]').value.trim();

    /* VALIDAÇÃO DO NOME */

    if (nome === "") {

      alert("Preencha o nome!");

      return;

    }


    /* VALIDAÇÃO DO E-MAIL */

    if (!email.includes("@")) {

      alert("Email inválido!");

      return;

    }


    /* VALIDAÇÃO DO TELEFONE */

    if (telefone.length < 10) {

      alert("Telefone inválido!");

      return;

    }



    alert("Formulário enviado com sucesso!");


    form.reset();

  });

});
