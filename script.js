const form = document.getElementById('form');
const senha = document.getElementById('senha');
const confirmar = document.getElementById('confirmar');
const erroSenha = document.getElementById('erroSenha');
const forcaSenha = document.getElementById('forcaSenha');

senha.addEventListener('input', () => {
  const val = senha.value;
  let força = "Fraca";

  if (val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val) && /[^A-Za-z0-9]/.test(val)) {
    força = "Forte";
    forcaSenha.style.color = "green";
  } else if (val.length >= 6) {
    força = "Média";
    forcaSenha.style.color = "orange";
  } else {
    força = "Fraca";
    forcaSenha.style.color = "red";
  }

  forcaSenha.textContent = `Força da senha: ${força}`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário

  if (senha.value !== confirmar.value) {
    erroSenha.textContent = "As senhas não coincidem.";
  } else {
    erroSenha.textContent = "";
    alert("Cadastro realizado com sucesso!");
    window.location.href = "home.html"; // Redireciona para a página inicial
  }
});