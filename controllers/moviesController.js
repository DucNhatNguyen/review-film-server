import { HttpStatusCode } from '../utilities/constants.js';
import { MoviesService } from '../services/moviesService.js';


const getPopularMovies = async (req, res) => {
  try {
    const lang = req.query.lang
    const result = await MoviesService.getPopularMovies(lang);
    res.status(HttpStatusCode.OK).json(result)

  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({ 
      error: error.message
    })
  }
}

export const MovieController = { getPopularMovies }