import express from 'express';
import { MovieController } from '../controllers/moviesController.js'

const router = express.Router();

router.route('/populars')
        .get(MovieController.getPopularMovies)


export const moviesRouters = router