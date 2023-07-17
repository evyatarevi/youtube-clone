import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {  maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': '1a36932115msh954a961601ba897p147c9bjsn764d4c8534f1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

 export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// export default fetchFromApi;