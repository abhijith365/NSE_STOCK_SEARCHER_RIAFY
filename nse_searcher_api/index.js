import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from "morgan"
import connect from './config/db.js'

const app = express()

// middlewares parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
dotenv.config({ path: './config/config.env' })

// DB connection
connect()

// server
app.listen(process.env.PORT, () => { console.log("server is running on port 8888") })