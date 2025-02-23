import express from 'express'
import path from 'path'

const app =express()
const port = 3000

const __dirname = path.resolve()

app.get('/user' , (req,res) => {
    res.send("Hello World!")
})

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log("Successfully!")
})