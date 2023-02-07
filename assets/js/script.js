document.querySelector('#form-login').addEventListener('submit', e => {

  e.preventDefault();
  
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  let json = { email, password }
  
  /* Necessário remover os required dos campos para entrar nas validações abaixo */  
  if (!json.email) {
    console.error("O campo e-mail deve ser preenchido");
  } else if (!json.password) {
    console.error("O campo password deve ser preenchido");
  } else {
    console.log("campos validados com sucesso.")
  }
  
});