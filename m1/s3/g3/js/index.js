let invia = document.querySelector("#invia");
invia.addEventListener("click", function (event) {
  event.preventDefault();
  let input = document.querySelector("input");

  let listElement = document.createElement("p");

  listElement.innerText = input.value;
  let button = document.createElement("button");
  listElement.append(button);
  button.innerText = "x";
  button.addEventListener("click", function () {
    listElement.remove();
  });
  let lista = document.querySelector("#lista");
  lista.append(listElement);
  listElement.addEventListener("click", function () {
    if (listElement.style.textDecoration === "line-through") {
      listElement.style.textDecoration = "none";
    } else {
      listElement.style.textDecoration = "line-through";
    }
  });
});
