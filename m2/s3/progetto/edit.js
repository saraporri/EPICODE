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
    document.querySelector("#name").value = phone.name;
    document.querySelector("#brand").value = phone.brand;
    document.querySelector("#price").value = phone.price;
    document.querySelector("#imageUrl").value = phone.imageUrl;
    document.querySelector("#description").value = phone.description;
  });

const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const brand = document.querySelector("#brand").value;
  const price = document.querySelector("#price").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  const description = document.querySelector("#description").value;

  const updatedPhone = {
    name,
    description,
    brand,
    imageUrl,
    price,
  };

  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTM4ODJkN2IxMTAwMTkwZTZlYjAiLCJpYXQiOjE3MDk4OTI0ODgsImV4cCI6MTcxMTEwMjA4OH0.8-vfD3NUF5uCqMbozqiGS5ORSyhdC-XDtMAUgQlCIHY",
    },
    body: JSON.stringify(updatedPhone),
  })
    .then((res) => res.json())
    .then((res) => {
      location.href = "index.html";
    });
});

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTM4ODJkN2IxMTAwMTkwZTZlYjAiLCJpYXQiOjE3MDk4OTI0ODgsImV4cCI6MTcxMTEwMjA4OH0.8-vfD3NUF5uCqMbozqiGS5ORSyhdC-XDtMAUgQlCIHY",
    },
  })
    .then((res) => res.json())
    .then(() => {
      location.href = "index.html";
    });
});
