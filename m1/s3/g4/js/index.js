const numWrap = document.querySelector(".num-wrap");
for (let i = 1; i <= 90; i++) {
  let numero = document.createElement("div");
  numero.classList.add("numero");
  numero.innerText = i;
  numWrap.append(numero);
}
