let circulo = document.querySelector(".circulo")
let copo = document.querySelector(".img-starbucks")
let botoes = document.querySelectorAll(".botao-menu")

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    if (index === 0) {
      circulo.style.backgroundColor = "#017143"
      copo.src = "img/img1.png"
    }
    if (index === 1) {
      circulo.style.backgroundColor = "#eb7495"
      copo.src = "img/img2.png"
    }
    if (index === 2) {
      circulo.style.backgroundColor = "#d752b1"
      copo.src = "img/img3.png"
    }
  })
})
