export async function getAllStarshipsData() {
  const res = await fetch('https://swapi.dev/api/starships/')
  const json = await res.json();

  return json;
}

export async function getAllStarshipIds() {
  return getAllStarshipsData();
}
