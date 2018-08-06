import Axios from "axios";

const SCORE_URL = 'https://fast-inlet-87027.herokuapp.com/api/score';

const getScore = async res => { 
  return Axios.post(SCORE_URL, res);
};

export default getScore;
