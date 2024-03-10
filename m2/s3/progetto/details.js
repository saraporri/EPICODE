const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTM4ODJkN2IxMTAwMTkwZTZlYjAiLCJpYXQiOjE3MDk4OTI0ODgsImV4cCI6MTcxMTEwMjA4OH0.8-vfD3NUF5uCqMbozqiGS5ORSyhdC-XDtMAUgQlCIHY",
  },
})
  .then((res) => res.json())
  .then((phone) => {
    let name = document.querySelector("#name");
    name.innerText = phone.name;

    let brand = document.querySelector("#brand");
    brand.innerHTML = phone.brand;

    let price = document.querySelector("#price");
    price.innerText = phone.price;
    let imageUrl = document.querySelector("#img");
    imageUrl.src = phone.imageUrl;
    let description = document.querySelector("#description");
    description.innerText = phone.description;
  });
