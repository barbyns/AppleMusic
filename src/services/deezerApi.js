const BASE_URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

export const searchTracks = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}${query}`);
    if (!response.ok) throw new Error('Errore rete');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Errore caricamento Deezer:', error);
    return [];
  }
};
