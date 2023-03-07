import { Router } from 'express'
import { movieController } from '../controllers/movie-controller.js'

const router = Router()

router.get('/movies', movieController.getAllMovies)

export default router
