import Axios from "axios";

const SCORE_URL = 'https://fast-inlet-87027.herokuapp.com/api/score';

const getScore = async (res, save) => { 
  return Axios.post(SCORE_URL, { ...res, save });
};

export default getScore;
