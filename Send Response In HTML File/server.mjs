import express from 'express'
import path from 'path'
// Yeh built-in module hai jo Node.js mein file aur directory paths ke sath kaam karne ke liye use hota hai.

const app = express()
const port = 8000

app.get('/' , (req,res) => {
    const dir = path.resolve() // Yeh current working directory ka absolute path fetch karta hai jahan server run ho raha hai.
    console.log("my path =", dir)
    const url = path.join(dir, './index.html') //  Yeh current directory ka path aur index.html file ka path join kar ke full path banata hai.
    console.log("fullpath =", url) 
    res.sendFile(url) // Yeh index.html file ko client ko response mein bhejta hai.

})

app.listen(port, ()=>{
    console.log("Congratulations! It Works")
})