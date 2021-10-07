import "reflect-metadata";
import {createConnection} from "typeorm"
import express from "express"

import { router } from './router'


export const PORT = process.env.PORT || '3000'
export const DB_CONNECTION_NAME = process.env.DB_CONNECTION_NAME || 'default'

const app = express()

app.use('/api',router)
app.use(express.json)

createConnection(DB_CONNECTION_NAME).then(async () => {
  app.listen(+PORT, () => {
    console.log('Server is running at PORT:',+PORT)
  })
}).catch(error => console.log(error))
