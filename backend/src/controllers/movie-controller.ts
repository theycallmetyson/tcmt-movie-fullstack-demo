import { Request, response, Response } from 'express'
import { movieService } from '../services/movie-service.js'

/**
 * Get all movies from the movie service
 * @param req
 * @param res
 * @returns
 */
const getAllMovies = async (req: Request, res: Response) => {
  const page = req.query.page
  const movie = await movieService.get(page)
  return res.json(movie.data)
}

/**
 * Movie controller
 */
export const movieController = {
  getAllMovies
}
