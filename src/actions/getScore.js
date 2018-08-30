import Axios from "axios";

const SCORE_URL = 'https://lake-barber.glitch.me/api/score';

const getScore = async (res, save) => { 
  return Axios.post(SCORE_URL, { ...res, save });
};

export default getScore;
