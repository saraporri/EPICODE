async function chiamata(query) {
  const apiKey = "Vqw9yBXhD6KlaBaN1RnFSrjFVGjQW7M1Sv5tKIY17tPQIzt45rBoGyxA";

  return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  }).then((dati) => dati.json());
}

chiamata("pizza").then((pizze) => {
  console.log(pizze);
});
