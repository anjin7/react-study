const BASE_URL = `https://disney_api.nomadcoders.workers.dev/`;


export function fetchCharacter() {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}

export function fetchCharacterInfo(characterId: string) {
  return fetch(`${BASE_URL}/characters/${characterId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}