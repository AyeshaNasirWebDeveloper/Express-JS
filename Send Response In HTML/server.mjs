import express from 'express'

const app = express()
const port = 7000

app.get('/', ( req, res) => {
    res.send('<h1>Welcome to the HTML Heading</h1><h3>Hello World</h3>') // We can write HTML code here
})

app.listen(port, () => {
    console.log("Code is Running Successfully!")
})