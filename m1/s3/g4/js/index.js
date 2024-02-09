const numWrap = document.querySelector(".num-wrap");
for (let i = 1; i <= 90; i++) {
  let numero = document.createElement("div");
  numero.classList.add("numero");
  numero.innerText = i;
  numWrap.append(numero);
}
let numero = document.querySelector(".numero");

const pescaBtn = document.querySelector(".pesca");
let numPescato = document.querySelector(".numero-pescato");
pescaBtn.addEventListener("click", function () {
  let numRandom = Math.floor(Math.random() * 91);
  numPescato.innerText = numRandom;
  if (numPescato.innerText == numero.innerText) {
    numero.classList.add("random");
  }
});

console.log(numPescato, pescaBtn);
