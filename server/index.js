require('dotenv').config()
const express = require('express')
const controller = require('./controller')
const massive = require('massive')
const { SERVER_PORT } = process.env
const { CONNECTION_STRING } = process.env
// import {HashRouter} from 'react-router-dom'

/** This is connecting my app to the database */
massive(CONNECTION_STRING)

const app = express()

// app.get(`/${CONNECTION_STRING}`, controller.getHouses) -- revision or deletion

app.get('')



app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`)
})