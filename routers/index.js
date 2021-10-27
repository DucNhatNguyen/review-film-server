import express from 'express';
import { moviesRouters } from '../routers/movieRouter.js'

const router = express.Router();


// GET: List Movie
router.use('/movies', moviesRouters)

export const api = router