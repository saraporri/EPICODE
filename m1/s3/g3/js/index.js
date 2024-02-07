let invia = document.querySelector("#invia");
invia.addEventListener("click", function (event) {
  event.preventDefault();
  let input = document.querySelector("input");

  let listElement = document.createElement("li");

  listElement.append(input.value);
});
