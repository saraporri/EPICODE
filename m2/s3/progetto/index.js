fetch("https://striveschool-api.herokuapp.com/api/product/", {
  method: "GET",
  headers: {
    "Content-type": "application/json",

    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTM4ODJkN2IxMTAwMTkwZTZlYjAiLCJpYXQiOjE3MDk4OTI0ODgsImV4cCI6MTcxMTEwMjA4OH0.8-vfD3NUF5uCqMbozqiGS5ORSyhdC-XDtMAUgQlCIHY",
  },
})
  .then((res) => res.json())
  .then((newProducts) => {
    console.log(newProducts);
    for (let newProduct of newProducts) {
      let card = createClone();

      let img = card.querySelector("#img");
      let name = card.querySelector("#name");
      let price = card.querySelector("#price");
      let editBtn = card.querySelector("#edit-btn");
      let infoBtn = card.querySelector("#info-btn");

      img.src = newProduct.imageUrl;
      name.innerText = newProduct.name;
      price.innerText = newProduct.price;

      editBtn.href = `edit.html?id=${newProduct._id}`;
      infoBtn.href = `details.html?id=${newProduct._id}`;

      document.querySelector(".row").append(card);
    }

    const spinner = document.querySelector("#spinner");
    spinner.classList.add("d-none");
  });

function createClone() {
  let template = document.querySelector("#card-template");
  let clone = template.content.cloneNode(true);
  return clone;
}
