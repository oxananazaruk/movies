import axios from 'axios';

const API_KEY = 'a74d577cd193b62ed06f68b282af6a8f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};
