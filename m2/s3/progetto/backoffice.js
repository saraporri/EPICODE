const addressBarContent = new URLSearchParams(location.search);
const eventId = addressBarContent.get("eventId");

if (eventId) {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTM4ODJkN2IxMTAwMTkwZTZlYjAiLCJpYXQiOjE3MDk4OTI0ODgsImV4cCI6MTcxMTEwMjA4OH0.8-vfD3NUF5uCqMbozqiGS5ORSyhdC-XDtMAUgQlCIHY",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("ERRORE NEL RECUPERO DETTAGLIO");
      }
    })
    .then((cell) => {
      const nameInput = document.getElementById("name");
      const descriptionInput = document.getElementById("description");
      const priceInput = document.getElementById("price");
      const imageUrlInput = document.getElementById("imageUrl");
      const brandInput = document.getElementById("brand");

      nameInput.value = cell.name;
      descriptionInput.value = cell.description;
      priceInput.value = cell.price;
      brandInput.value = cell.brand;
      imageUrlInput.value = cell.imageUrl;
    })
    .catch((err) => {
      console.log("err", err);
    });
}

const formRif = document.getElementById("form");
formRif.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("invio dati");
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const imageUrlInput = document.getElementById("imageUrl");
  const brandInput = document.getElementById("brand");

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    brand: brandInput.value,
    imageUrl: imageUrlInput.value,
  };
  console.log("Ecco l'oggetto che manderò alle API", newProduct);

  let methodToUse = "POST";
  if (eventId) {
    methodToUse = "PUT";
  }

  let urlToUse = "https://striveschool-api.herokuapp.com/api/product";
  if (eventId) {
    urlToUse = "https://striveschool-api.herokuapp.com/api/product/" + eventId;
  }

  fetch(urlToUse, {
    method: methodToUse,
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTM4ODJkN2IxMTAwMTkwZTZlYjAiLCJpYXQiOjE3MDk4OTI0ODgsImV4cCI6MTcxMTEwMjA4OH0.8-vfD3NUF5uCqMbozqiGS5ORSyhdC-XDtMAUgQlCIHY",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("ogg", res);
      if (res.ok) {
        alert("Prodotto salvato");
        location.href = "index.html";
      } else {
        alert("Qualcosa è andato storto");
        throw new Error("err in fase di POST");
      }
    })
    .catch((err) => {
      console.log("Errore ", err);
    });
});
