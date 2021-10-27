import axios from 'axios';
import { API_EXTERNAL_URL } from '../utilities/constants.js'

//const dotenv = require('dotenv');
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY 

export const getPopularMoviesFromAPI = async (language) => { // EX: language: vi-VN
  const req = await axios.get(`${API_EXTERNAL_URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=2`)
  return req.data
}