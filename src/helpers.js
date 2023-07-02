export async function fetchData(key) {
  const data = await JSON.parse(localStorage.getItem(key));
  return data;
}