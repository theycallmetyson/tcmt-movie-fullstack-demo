import axios from 'axios'
import { Request, Response } from 'express'
import { ParsedQs } from 'qs'
import logger from '../config/winston/winston-setup.js'

const get = async (req: Request, res: Response) => {
  let response: Response
  const id = req.params.id
  const title = req.query.title
  const year = req.query.year
  const genres = req.query.genres
  const page = req.query.page

  if (id) {
    response = await getMovieById(id, page)
  } else if (title) {
    response = await getMoviesByTitle(title, page)
  } else if (year) {
    response = await getMoviesByYear(year, page)
  } else if (genres) {
    response = await getMoviesByGenre(genres, page)
  } else {
    response = await getAllMovies(page)
  }

  return res.json(response)
}

const getAllMovies = async (page) => {
  let response: Response
  try {
    response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=d85092b475ca8244330f585cb79400e6&language=en-US&sort_by=original_title.asc&page=` +
        page
    )
  } catch (error) {
    logger.error(error.message)
    response = error
  }
  return response
}

const getMovieById = async (id, page) => {
  let response: Response
  try {
    response = await axios.get(
      `https://api.themoviedb.org/3/movie/` +
        id +
        `?api_key=d85092b475ca8244330f585cb79400e6&language=en-US`
    )
  } catch (error) {
    logger.error(error.message)
    response = error
  }
  return response
}

const getMoviesByTitle = async (title, page) => {
  let response: Response
  try {
    response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d85092b475ca8244330f585cb79400e6&language=en-US&page=` +
        page +
        `&query=` +
        title
    )
  } catch (error) {
    logger.error(error.message)
    response = error
  }
  return response
}

const getMoviesByYear = async (year, page) => {
  let response: Response
  try {
    response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=d85092b475ca8244330f585cb79400e6&language=en-US&sort_by=original_title.asc&page=` +
        page +
        `&year=` +
        year
    )
  } catch (error) {
    logger.error(error.message)
    response = error
  }
  return response
}

const getMoviesByGenre = async (genre, page) => {
  let response: Response
  try {
    response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=d85092b475ca8244330f585cb79400e6&language=en-US&sort_by=original_title.asc&page=` +
        page +
        `&with_genres=` +
        genre
    )
  } catch (error) {
    logger.error(error.message)
    response = error
  }
  return response
}

export const movieService = {
  get
}
