import axios, { AxiosResponse } from 'axios'
import logger from '../config/winston/winston-setup.js'

async function get(page) {
  let response: AxiosResponse<any, any>
  try {
    response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=d85092b475ca8244330f585cb79400e6&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=' +
        page
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
