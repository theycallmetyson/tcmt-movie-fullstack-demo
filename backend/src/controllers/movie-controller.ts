import { Request, Response } from 'express'
import { movieService } from '../services/movie-service.js'

/**
 * Get all movies from the movie service
 * @param req
 * @param res
 * @returns
 */
const getAllMovies = async (req: Request, res: Response) => {
  const movie = await movieService.get(req, res)
  return res.json(movie)
}

/**
 * Movie controller
 */
export const movieController = {
  getAllMovies
}
