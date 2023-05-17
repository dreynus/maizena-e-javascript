const planta = document.querySelector('.planta-btn');
const imagemPlanta = document.querySelector('.planta-img');
let contador = 0;
let imagens = [
  "img/etapa-zero.png",
  "img/etapa-um.png",
  "img/etapa-dois.png",
  "img/etapa-tres.png",
  "img/etapa-quatro.png",
  "img/etapa-cinco.png"
];
let contadorImagem = 1;

planta.addEventListener('click', function () {
  imagemPlanta.setAttribute("src", imagens[contadorImagem]);
  contadorImagem++;

  if (contadorImagem >= imagens.length) {
    contadorImagem = 1;
    contador++;
    const contagem = document.querySelector('.contagem');
    contagem.innerHTML = `<p>${contador} Maconhas plantadas.</p>`;
  }
});
