require('dotenv').config()
const express = require('express')
const controller = require('./controller')
const massive = require('massive')
const { SERVER_PORT } = process.env
const { CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)

const app = express()


app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`)
})