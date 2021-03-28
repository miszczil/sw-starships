export async function getAllFilmsData() {
  const res = await fetch("https://swapi.dev/api/films/")
  const json = await res.json();

  return json;
}
