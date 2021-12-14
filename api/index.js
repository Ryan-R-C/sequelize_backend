const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())// express initalize bodyParser wich will convert the files to json

const port = 3370

app.get('/test', (req, res) => {
    res
    .status(200)
    .send({ message: 'Welcome, stranger' })
} )

app.listen(port, () => console.log(`server running at ${port}, over here stranger`) )