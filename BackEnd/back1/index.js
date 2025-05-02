require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const api = {
    name: "Raj",
    lastName: "Gojari",
    Age: "24",
    Address: "mumbai"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('<h1>hello twitter</h1>')
})
app.get('/api', (req, res) => {
    res.json(api)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
