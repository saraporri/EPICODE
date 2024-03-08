const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Invio dati");

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const brand = document.getElementById("brand").value;

  const newProduct = {
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
