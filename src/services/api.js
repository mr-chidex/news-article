import axios from "axios";

export const getArticles = async () => {
  try {
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_SAMPLE_KEY}`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};
