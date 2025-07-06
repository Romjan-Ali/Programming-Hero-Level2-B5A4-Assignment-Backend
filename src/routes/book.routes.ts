import express from 'express'
import {
  bookDeleteById,
  bookUpdateById,
  createBook,
  getAllAuthors,
  getAllBooks,
  getAllGenres,
  getBookByUserIdParam,
} from '../controllers/book.controller'

const bookRouter = express.Router()

bookRouter.route('/').get(getAllBooks).post(createBook)
bookRouter.route('/authors').get(getAllAuthors)
bookRouter.route('/genres').get(getAllGenres)
bookRouter
  .route('/:bookId')
  .get(getBookByUserIdParam)
  .put(bookUpdateById)
  .delete(bookDeleteById);

export default bookRouter
