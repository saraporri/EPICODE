async function chiamata(query) {
  const apiKey = "Vqw9yBXhD6KlaBaN1RnFSrjFVGjQW7M1Sv5tKIY17tPQIzt45rBoGyxA";

  return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  }).then((dati) => dati.json());
}
let load = document.querySelector(".load");
load.addEventListener("click", () => {
  chiamata("kittens").then((dati) => {
    console.log(dati);
    let img = document.getElementsByTagName("img");
    dati.photos.forEach((photo, i) => {
      if (i < img.length) {
        img[i].src = photo.src.landscape;
      }
    });
  });
});
