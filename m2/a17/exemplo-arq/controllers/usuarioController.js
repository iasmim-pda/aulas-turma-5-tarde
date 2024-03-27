function UsuarioController(){
  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const senha = document.getElementById("senha").value

  //usando a Model para criar um novo dado!!
  const novoUsuario = new Usuario(nome, email, senha)

  const divResultado = document.getElementById("resultado")

  //chamei a minha função de view
  //ela retorna um html
  // adicionei esse html na minha div resultado
  divResultado.innerHTML = CardUsuario(novoUsuario)
}
