const hamburguer = document.getElementById("hamburguer")
const menuLateral = document.getElementById("menu-lateral")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("ativo")
  menuLateral.classList.toggle("show")
})
