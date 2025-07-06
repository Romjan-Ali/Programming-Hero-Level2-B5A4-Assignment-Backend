import { Request, Response } from 'express'
import express, { Application } from 'express'
import cors from 'cors'
import bookRouter from './routes/book.routes'
import borrowRouter from './routes/borrow.routes'
import globalErrorHandler from './middlewares/globalErrorHandler'

const app: Application = express()

app.use(express.json())
/* app.use(
  cors({ origin: 'https://programming-hero-level2-b5-a4-assig-phi.vercel.app' })
) */
app.use(cors({ origin: '*' }))

app.use('/api/books', bookRouter)
app.use('/api/borrow', borrowRouter)
app.use(globalErrorHandler)

app.get('/api', (req: Request, res: Response) => {
  res.status(200).send(`Welcome to Library Management API`)
})

export default app
