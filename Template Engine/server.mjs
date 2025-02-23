import express from 'express'

const app = express()
const port = 9000

const products = [
    {
        title: "Iphone",
        price: 750000,
        rating: 4.5
    },
    {
        title: "Infinix",
        price: 150000,
        rating: 4.7
    },
    {
        title: "Samsung",
        price: 450000,
        rating: 4.6
    },
]

app.get('/', (req,res) => {
    let name = "Mobile Shop"
    res.render('index.ejs', {
        name , products
    })
})

app.listen(port, () => {
    console.log('Perfectly Running!')
})