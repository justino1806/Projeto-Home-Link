function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") /* bem mais facil */

  /* pega image tag */
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile-light.png") //preciso pegar a imagem pra por aqui ainda
    img.setAttribute("alt", "Imagem do Justino sorrindo com moletom branco e óculos, com grades de quadra de fundo")
  } else {
    img.setAttribute("src", "./assets/profile.png")
    img.setAttribute(
      "alt",
      "Foto do Justino com camisa azul, óculos e com fundo preto"
    )
  }
}
