import axios from 'axios';

const AnimeListApi = async (page) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${page}&limit=15`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const fetchAnimeData = async (id) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return null;
  }
};

const AnimeSearch = async (data, page) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${page}&q=${data}&order_by=popularity&sort=asc&sfw&limit=15`
    );

    // Assuming the response data is the payload you provided
    const payload = response.data;

    return payload; // Return the fetched data
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export { AnimeListApi, AnimeSearch, fetchAnimeData };
