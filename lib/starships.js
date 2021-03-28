export async function getAllStarshipsData() {
  const res = await fetch("https://swapi.dev/api/starships/")
  const json = await res.json();

  return json;
}

export async function getAllStarshipIds() {
  const allStarshipsData = await getAllStarshipsData();

  const ids = allStarshipsData.results.map((starship) =>
        starship.url.match(/starships\/(\d+)/)[1]
  );

  return ids;
}

export async function getStarshipData(id) {
  const res = await fetch("https://swapi.dev/api/starships/" + id)
  const json = await res.json();

  return json;
}
