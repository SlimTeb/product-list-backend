const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('../db')

const ProductRouter = require('../src/routes/ProductRouter')


const app = express()
const PORT = 4000


app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', () => {
    console.error.bind(console, '## MongoDB connection error:')
})

app.get('/', (req, res) => {
    res.send('Hallo Welt')
})

app.use('/api', ProductRouter)



app.listen(PORT, () => {
    console.log(`## server listening on port ${PORT}`)
})