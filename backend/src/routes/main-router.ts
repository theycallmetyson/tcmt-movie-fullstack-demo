import { Router } from 'express'
import { movieController } from '../controllers/movie-controller.js'

const router = Router()

/**
 * Get all movies
 */
router.get('/movies', movieController.getAllMovies)

export default router
