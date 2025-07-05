import dotenv from 'dotenv'
import app from './app'
import mongoose from 'mongoose'

dotenv.config()

const main = async () => {
  await mongoose
    .connect(process.env.DATABASE_LINK as string)
    .then(() => {
      console.log('Connected to MongoDB using Moongoose!')
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err)
      process.exit(1)
    })
  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
  })
}

main()
