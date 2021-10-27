import { getPopularMoviesFromAPI } from '../api_External/api.js'
import { IMAGE_ORIGINAL_HOST_URL } from '../utilities/constants.js'


const getPopularMovies = async (language) => {
  try {
    const result = await getPopularMoviesFromAPI(language)
    let list = [];
    result.results.forEach(movie => {
      list.push({
        title: movie.title,
        releaseDate: movie.release_date,
        vote_average: movie.vote_average * 10,
        poster_img: IMAGE_ORIGINAL_HOST_URL + movie.poster_path,
        popularity: movie.popularity,
        overview: movie.overview
      })
    })

     return {
       "page": result.page,
       "total_pages": result.total_pages,
       "total_results": result.total_results,
       "data": list
     }

  } catch (error) {
    throw new Error(error)
  }
}


export const MoviesService = { getPopularMovies }