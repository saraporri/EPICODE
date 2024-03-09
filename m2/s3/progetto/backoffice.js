const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Invio dati");

  const name = document.querySelector("#name").value;
  const brand = document.querySelector("#brand").value;
  const price = document.querySelector("#price").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  const description = document.querySelector("#description").value;

  let newProduct = {
    name,
    description,
    price,
    imageUrl,
    brand,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",

      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTM4ODJkN2IxMTAwMTkwZTZlYjAiLCJpYXQiOjE3MDk4OTI0ODgsImV4cCI6MTcxMTEwMjA4OH0.8-vfD3NUF5uCqMbozqiGS5ORSyhdC-XDtMAUgQlCIHY",
    },
    body: JSON.stringify(newProduct),
  })
    .then((res) => res.json())
    .then((res) => {
      location.href = "index.html";
    });
});
