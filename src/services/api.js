const API_KEY = "eb83c4c3";
const BASE_URL = "https://www.omdbapi.com/";

// Add = "marvel" or any keyword as a default
export const getPopularMovies = async (query = "marvel") => {
  try {
    const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data.Response === "True") {
      return data.Search;
    } else {
      console.error("OMDB Error:", data.Error);
      return [];
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};