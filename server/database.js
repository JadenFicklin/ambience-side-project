require('dotenv').config()
const { PORT, DATABASE_URL } = process.env
const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
//added for hosting
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

//added for hosting
app.use(express.static(path.resolve(__dirname, '../build')))

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

//added for hosting
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

//npm i sequelize pg pg-hstore axios dotenv express cors
