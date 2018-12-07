require('dotenv').config()
const express = require('express')
const controller = require('./controller')
const massive = require('massive')
const { SERVER_PORT } = process.env
const { CONNECTION_STRING } = process.env
// import {HashRouter} from 'react-router-dom'
const app = express()
app.use(express.json())

/** This is connecting my app to the database */
massive(CONNECTION_STRING)
  .then(dbInstance => { app.set('db', dbInstance) })
  .catch(error => console.log(error))

app.get('api/showHouses', controller.getHouses) 



app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`)
})