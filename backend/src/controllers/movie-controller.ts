import { Request, response, Response } from 'express'
import { movieService } from '../services/movie-service.js'

const getAllMovies = async (req: Request, res: Response) => {
  const page = req.query.page
  const movie = await movieService.get(page)
  return res.json(movie.data)
}

export const movieController = {
  getAllMovies
}
