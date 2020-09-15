const mongoose = require('mongoose')

const DB_URL = `mongodb://127.0.0.1:27017/backend`
mongoose
    .connect(DB_URL, { useNewUrlParser: true })
    .catch(err => {
        console.error('## Connection error', err.message)
    })

const db = mongoose.connection

module.exports = db